# HoneyHeist
Roll20 Character Sheet for the [one page RPG Honey Heist](https://rowanrookanddecard.com/product/honey-heist). Artwork is taken from or based on the Disguises sheet included in the RPG PDF.  

![Character Sheet Screenshot](https://raw.githubusercontent.com/dCremins/HoneyHeist/master/preview-character_sheet.png)

## Disclaimer
This character sheet was created for personal use in a campaign I am playing with children. It is free for anyone who would like to use it in their own roll20 game or modify it for their own purposes. I make no claims to this being the best or cleanest way to achieve this, I just wanted a very easy to use sheet for my niece and nephew.  
You may need to change the URL path of the images if you choose to host these images elsewhere, or turn off ad-blocking software when viewing them on roll20. I had to whitelist roll20 is Ghostery in order for the images to show properly. 

## Your Bear
The image on the left changes to show your bear and hat, based on the Generate Random Bear button. Bears default to a Grizzly in a Trilby. Image does not update when manually setting fields, but can be adjusted by setting the bearImage and hatImage stats to a number 1 through 6.  
![Bear image, Generate Random Bear button, and stat input fields in the character sheet](https://raw.githubusercontent.com/dCremins/HoneyHeist/master/readme_images/generate.png)  

### Generate Random Bear
This button is powered by the generate.js file, loaded into the API scripts portion of your roll20 game settings. This script generates a random number for each field and then sets those attributes in the character sheet. This button also resets the Bear and Criminal stats to 3.

## Rolling Stats
Each skill section gives a brief overview of how to know which stat to roll. The buttons with black images are a straight 1D6 roll, while the buttons with gold images are special skill and role related rolls which roll 2D6 and keep the lowest number.
![Criminal and Bear stat buttons with text explaining their uses](https://raw.githubusercontent.com/dCremins/HoneyHeist/master/readme_images/skills.png)  

Checkboxes automatically update the opposing skill when clicked on or off, ensuring that there are only ever a max of 6 possible checked boxes. For example, clicking a new box in Bear automatically removes a check from Criminal. This represents the fact that skill points are only ever traded between the two stats, instead of gained or lost.  

Additional text is included verbatim from the rules PDF.

## Roll Template
Rolls from the character sheet are formatted in chat to make it easy to tell a success from a failure at a glance. 2D6 advantage rolls from the character sheet (the gold image buttons) automatically use the lowest of the two rolls when comparing to the associated stat.  

![Example Success and Failure roll template in the roll20 chat](https://raw.githubusercontent.com/dCremins/HoneyHeist/master/preview-roll_template.png)
