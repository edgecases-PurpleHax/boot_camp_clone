## Cryptography Homework: Ransomware Riddles Solution Guide

### Riddle 1

To solve the first riddle, you will need to use the Caesar (ROT) cipher.
- The riddle hinted that the cipher used a rotation of 8. 
- Therefore, each letter will be shifted to the left 8 characters in the alphabet.
  - Note that there is also a website that can be used to decrypt the message: https://www.dcode.fr/rot-cipher. To use it, change the ROT value to 8.
- Once decrypted, the answer will be `gruber`.
- Once submitted, the following key will be provided: `6skd8s`.

### Riddle 2

To solve the second riddle, the binary will need to be converted into a plaintext message.

- you can do this manually, but the following website is available to convert the Binary into text: https://www.browserling.com/tools/text-to-binary

- Once decrypted the Binary value of `01000111 01100101 01101110 01101110 01100101 01110010 01101111`  is `Gennero`.

- Once submitted, the following key will be provided: `cy8snd2`.

### Riddle 3
 
To solve this riddle, you need to use OpenSSL in the Ubuntu VM.
- First, add the ciphertext into a file with the following command:
  - `echo "4qMOIvwEGXzvkMvRE2bNbg==" > cipher.txt`

- Then, the following openSSL command will then be ran against this file:
  - `openssl enc -pbkdf2 -nosalt -aes-256-cbc -d -in cipher.txt -base64 -K 5284A3B154D99487D9D8D8508461A478C7BEB67081A64AD9A15147906E8E8564 -iv 1907C5E255F7FC9A6B47B0E789847AED`

- This will decrypt the ciphertext and display the cleartext message `takagi`.
- Once submitted, the following key will be provided `ud6s98n`. 


### Riddle 4

For this riddle, you will need to answer four questions:
1. Jack would use Jill's public key to encrypt a message that he will send to Jill. 

2. Jill would decrypt this message with her private key.
3. Six people total:
    - **Asymmetric** = 6 * 2 = 12 Keys
    - **Symmetric** = (6 * (6 -1))/2 = (6 * 5)/2 =  30/2 = 15 Keys
4. Tim would only use someone else's public key to encrypt a message.  The only other person's public key is Alice. 
  
Once these questions are answered correctly, the following key will be provided: **7gsn3nd2**

### Riddle 5



  - **Hash:**  `3b75cdd826a16f5bba0076690f644dc7`
  
**Solution** - 

For this riddle, you can use hashcat to crack the MD5 hash:

- First, add this hash into a file with the following command:
  - `echo "3b75cdd826a16f5bba0076690f644dc7"  > hash.txt`

- Next, run hashcat to crack this hash with the following command:
  - `hashcat -m 0 -a 0 -o solved.txt hash.txt /usr/share/wordlists/rockyou.txt --force`

- Inside the `solved.txt` file is the answer: `3b75cdd826a16f5bba0076690f644dc7:argyle`

Once  `argyle` is submitted as the solution, they will be provided with the following key: `ajy39d2`. 
 

### Riddle 6

For this riddle, you need to use steghide to decrypt the hidden message inside the image.
- First, download the image into you Ubuntu VM and then run the following command:
  - `steghide extract -sf mary-lamb.jpg`
- It will then ask for the passphrase. The passphrase is written on the book in the image:  `ABC`.
- After the passphrase is entered, the following file will be extracted: `code_is_inside_this_file.txt`.
- Inside this file is the following code: `mcclane`
- Once submitted, the following key will be provided: `7skahd6`.


## Ransomware Decrypted:

The following keys need to be submitted in the decrypted:
  - **Riddle 1**: `6skd8s`
  - **Riddle 2**: `cy8snd2`
  - **Riddle 3**: `ud6s98n`
  - **Riddle 4**: `7gsn3nd2`
  - **Riddle 5**: `ajy39d2`
  - **Riddle 6**: `7skahd6`
  
After submitting all the keys, the following response will be provided:

`Congratulations!  You have decrypted the Ransomware!  All the Nakatomi Hospital Records are now Decrypted! Please take a screenshot of this message and submit as your homework!`

---
© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
 
  
