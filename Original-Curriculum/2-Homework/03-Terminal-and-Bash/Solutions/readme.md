## Week 3 Homework Solution: A High Stakes Investigation

### Step 1: Investigation Preparation

To make the directories, run the following commands:

  - `mkdir Lucky_Duck_Investigations`

  - `cd Lucky_Duck_Investigations`
  - `mkdir Roulette_loss_Investigation`

  - `cd Roulette_loss_Investigation`

  - `mkdir Player_Analysis Dealer_Analysis Player_Dealer_Correlation`

  - `touch Player_Analysis/Notes_Player_Analysis Dealer_Analysis/Notes_Dealer_Analysis Player_Dealer_Correlation/Notes_Player_Dealer_Correlation`

The final directory, with the analysis and correlation files, should have the following structure:

  ```bash
  Lucky_Duck_Investigations/
  └── Roulette_loss_Investigation
      ├── Dealer_Analysis
      │   └── Notes_Dealer_Analysis
      ├── Player_Analysis
      │   └── Notes_Player_Analysis
      └── Player_Dealer_Correlation
          └── Notes_Player_Dealer_Correlation
  ```

### Step 2: Gathering Evidence

Run the following command to set up the evidence files:

   - `wget "https://gist.githubusercontent.com/eddimus/e57fcb9510dd18225142cb23f236da24/raw/39f7f71b22ae7997e92d82e57aedd02bbb6dd481/Setup_Evidence_Files.sh" && chmod +x ./Setup_Evidence_Files.sh && ./Setup_Evidence_Files.sh`


To move over the win/loss files, run:

  - `mv Roulette_Player_WinLoss_0310/0310* Lucky_Duck_Investigations/Roulette_loss_Investigation/Player_Analysis/` 
  - `mv Roulette_Player_WinLoss_0310/0312* Lucky_Duck_Investigations/Roulette_loss_Investigation/Player_Analysis/` 
  - `mv Roulette_Player_WinLoss_0310/0315* Lucky_Duck_Investigations/Roulette_loss_Investigation/Player_Analysis/` 

- Check the `Player_Analysis` directory with:

  - `ls Lucky_Duck_Investigations/Roulette_loss_Investigation/Player_Analysis/`


- To move over the dealer schedule files: 

  - `mv Dealer_Schedules_0310/0310* Lucky_Duck_Investigations/Roulette_loss_Investigation/Dealer_Analysis/` 
  - `mv Dealer_Schedules_0310/0312* Lucky_Duck_Investigations/Roulette_loss_Investigation/Dealer_Analysis/` 
  - `mv Dealer_Schedules_0310/0315* Lucky_Duck_Investigations/Roulette_loss_Investigation/Dealer_Analysis/` 

- Check the `Dealer_Analysis` directory with:

  - `ls Lucky_Duck_Investigations/Roulette_loss_Investigation/Dealer_Analysis/`


### Step 3: Correlating the Evidence


#### Player Analysis  

  - Navigate into the directory: 
  
    - `cd Player_Analysis`

  - Preview one file by running: 
  
    - `head 0310_win_loss_player_data`

    - Note that losses are indicated by a negative number or `a *-*`.

  - `grep` the losses based on that value and place it into a file called `Roulette_Losses`:
    
    - `head 0310_win_loss_player_data | grep - * > Roulette_Losses`

  - Preview the file: 
  
    - `head Roulette_Losses`

  - Use `nano Notes_Player_Analysis` to add the data below to the notes files:
  
    - Times of losses:
    
        ```
        0310_:05:00:00	AM
        0310_:08:00:00	AM
        0310_:02:00:00	PM
        0310_:08:00:00	PM
        0310_:11:00:00	PM
        0312_:05:00:00	AM
        0312_:08:00:00	AM
        0312_:02:00:00	PM
        0312_:08:00:00	PM
        0312_:11:00:00	PM
        0315_:05:00:00	AM
        0315_:08:00:00	AM
        0315_:02:00:00	PM
        ```

- Note that the same person appears at every time of loss: Mylie Schmidt.
  
- To figure out the number of times the player played, run:
  
  - `grep 'Mylie Schmidt' Roulette_Losses| wc -l`

  - The answer is 13.

#### Dealer Analysis

- Navigate into the directory:
  - `cd Dealer_Analysis`

- Preview one file by running:
  - `head 0310_Dealer_schedule`

- Note that the columns are separated out by spaces:
  - The column numbers for the four fields are ($1, $2, $5, and $6).
    
- The scripts for each time the losses occurred are:    
    
    ```cat 0310_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '05:00:00 AM' > Dealers_working_during_losses
    cat 0310_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '08:00:00 AM' >> Dealers_working_during_losses
    cat 0310_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '02:00:00 PM' >> Dealers_working_during_losses
    cat 0310_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '08:00:00 PM' >> Dealers_working_during_losses
    cat 0310_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '11:00:00 PM' >> Dealers_working_during_losses
    cat 0312_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '05:00:00 AM' >> Dealers_working_during_losses
    cat 0312_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '08:00:00 AM' >> Dealers_working_during_losses
    cat 0312_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '02:00:00 PM' >> Dealers_working_during_losses
    cat 0312_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '08:00:00 PM' >> Dealers_working_during_losses
    cat 0312_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '11:00:00 PM' >> Dealers_working_during_losses
    cat 0315_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '05:00:00 AM' >> Dealers_working_during_losses
    cat 0315_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '08:00:00 AM' >> Dealers_working_during_losses
    cat 0315_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep '02:00:00 PM' >> Dealers_working_during_losses
    
- Use `nano Dealers_working_during_losses` to add the following to the notes file: 

  - The dealer working during the time of the losses is always Billy Jones.

  - To get the count, run:
    - `grep "Billy Jones" Dealers_working_during_losses | wc -l`
  
  - The answer is 13.
  
#### Player/Employee Correlation

- In the notes file, add a summary that explains the following:  
  
  - There is always one dealer and one player active during the time of the losses: Billy Jones and Mylie Schmidt respectively.
  
  - They were also both playing and working at the same time on 13 occasions, which is highly suspicious.
   
 
### Step 4: Scripting Your Tasks

- Create the shell script that will easily analyze future employee schedules:  

  - `nano roulette_dealer_finder_by_time.sh`

- Inside the shell script place: 

  - `cat $1_Dealer_schedule | awk -F" " '{print $1, $2, $5,$6}'| grep "$2"`

- Save the script.

- Test the script by running:

  - `sh roulette_dealer_finder_by_time.sh 0310 '02:00:00 PM'`

- The arguments are:

  - `$1 = 0310`
  - `$2 = '02:00:00 PM'`

- After running the script, it should show:
  
  -  `02:00:00 PM Billy Jones`

**Bonus**

- Create the shell script to help identify future fraud: 

  - `nano roulette_dealer_finder_by_time_and_game.sh`

- Inside the shell script, place: 
  - `cat $1_Dealer_schedule | awk -F" " '{print $1, $2, '$3','$4' }'| grep "$2"`
  
  - To view the dealer for Blackjack on March 10 at 2:00 p.m., run:
      
      - `sh roulette_dealer_finder_by_time_and_game.sh 0310 '02:00:00 PM' '$3' '$4'`
  
      - This will show: `02:00:00 PM Chyna Mercado`

  - To view the dealer for roulette on March 10 at 2:00 p.m., run:
  
      - `sh roulette_dealer_finder_by_time_and_game.sh 0310 '02:00:00 PM' '$5' '$6'`
  
      - This will show: `02:00:00 PM Billy Jones`

  - To view the dealer for Texas Hold 'Em on March 10 at 2:00 p.m., run:
  
      - `sh roulette_dealer_finder_by_time_and_game.sh 0310 '02:00:00 PM' '$7' '$8'`

      - This will show: `02:00:00 PM Cleveland Hanna`

---

© 2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

