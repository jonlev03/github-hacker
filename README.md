# github-hacker

Github hacker is a simple application for people who dont think their github chart looks the best. Some people may consider this cheating, and some may think of this as putting the skills you learned to be a software deveoper to use!

## How to use it 

**Important** To use this project you need to have node installed on your computer and you also need to have your github account added to terminal. 



First you will need to fork the repo with the button in the top right of github <br>

![image](https://user-images.githubusercontent.com/81537476/188709137-57cde405-c49f-455b-951f-b7283d79483f.png)

Then you will copy the link that it provides on the repository page <br>

![image](https://user-images.githubusercontent.com/81537476/188709332-1ba53d3a-2455-4f5b-82de-673290bf91ed.png)

After you do this you will need to open your preferred terminal on your computer such as git bash or powershell and then run <br>

``` git clone <Your link here> ```

next type <br>

```node app``` <br>

That will bring you to this page here <br>

![image](https://user-images.githubusercontent.com/81537476/188709641-2e4ad50d-0409-4d69-8b89-f9c270c2e6fa.png)

This is hosted on your computer, and you will also see some notes in the terminal window. These can be used to track how close the program is to finishing once you make a request.

Inside the forum you can select a date range to add commits to. This can be as far in the past as you would like, and cannot be in the future. 

You can also set the number of commits you would like to have per day, with a variance of 0 this will produce the exact result.

You can finally set the variance, and that will either add or subtract a number between 0 and what you select from the number of commits for each day allowing you to add some variance.

Finally hit submit and wait for the program to finish. 

## How it works

This program uses Node.js express for a simple backend API, and takes advantage of simple-git to add commits and push the changes to github. 

A small front end page is created with vue so you dont need to manually enter dates for the settings since this is easy to use option for all the cheaters out there that want to look smart!


