# Day X Cheat Sheet — Lesson Name

## Key Terms

- **Term**: Definition
  > **Example**: Example usage here

## Key Commands

### <Tool/Topic>

Provide a 1-2 sentence description of the tool/topic.

#### <Task/Command>

Provide a description of the task/command—what it's called, and what it does.

```bash
# provide a usage example—one such example is below
openssl enc -nosalt -aes-256-cbc -k <your password here> -P
```
Provide any additional context here, if necessary/applicable.

<details>
  <summary>Expand for Explanations of Flags</summary>
  <ul>
    <li><code>-nosalt</code> prevents OpenSSL from using a salt value
    <li><code>-aes-256-cbc</code> says to use 256-bit AES in CBC mode.
    <li><code>-k</code> allows you to specify your password on the command line.
    <li><code>-P</code> tells OpenSSL to print your key and IV to the command line.
  </ul>
</details>
