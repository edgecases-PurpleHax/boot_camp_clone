# Canvas Publishing Tools

## Prerequisites

These tools were originally part of our curriculum repo and assume a cerain folder structure exists:

```
01-module-topic/
  content/
    lesson-1-whatever.md
    lesson-2-whatever.md
    any-other-readme-file.md
02-module-topic/
  content/
    lesson-1-whatever.md
    etc.md
03-etc/
canvas-tools/
  you-are-here.txt
```

You will also need to set up some environment variables to connect to the Canvas API and, optionally, the Canvas Studio API (for videos). See the [dot-env-sample file](./dot-env-sample) for a list of the required variables.

A Canvas API token can be generated through your Canvas profile. Your Canvas login should also work for Studio, but you might need to click "forgot my password" so you can manually set the password yourself.

## How to Use

Run `npm start` or `node index.js` to start the CLI app. You will be prompted for a list of options, where you must either provide a module number or a module+lesson number.

For example, choosing `Upload a Lesson` and inputting `2.1` will find the corresponding markdown file located at `02-[module-name]/content/lesson-1-[lesson-name].md`.

The first lesson in a module that is uploaded will create a module placeholder in Canvas. Lessons are split into separate Canvas pages based on any `##` headers in the markdown. Images are automatically uploaded to Canvas, and their Canvas URLs inserted into the page content before final upload.

The tools can also insert other content types if the following syntax is applied in the markdown:

* `!assessment: [atomic-assessment-id]`

* `!video: [studio-video-name]`

* `## [name of assignment] <assignment>`

If you write blockquotes in markdown as `> **Title:**`, the tools will add `class="callout title"` to the converted `<blockquote>` element.

If you add `#left` or `#right` to the end of an image source (e.g., `![](image.png#left)`), the tools will add `class="image-left"` or `class="image-right"` to the element.

The tools will look for an image located at `[module]/content/assets/banner.jpg` and, if it exists, insert that as the header background for every page.

If you want to wipe out an entire module from Canvas, you can run the separate `nuke_lessons.js` script.

## Development

All calls to the Canvas API are handled in `tools/Canvas.js`. Anything that has to do with manipulating the markdown or converted HTML is in `tools/Markup.js`. The `tools/Studio.js` module is unique to the Canvas Studio API (videos only).

See the [Canvas API documentation](https://canvas.instructure.com/doc/api/) and [Canvas Studio API documentation](https://bootcampspot.instructuremedia.com/api/docs) for more help.