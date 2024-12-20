[Visit site](https://moomin-mugs.netlify.app)

Backup .txt file located in assets folder
## Todo: 

### Main Page: 
- [x] List of mugs
    - [x] Link to detail page for more information on each mug 
- [x] HomePage grid layout for all device sizes 
- [x] Final style fixes
    - [x] Adjust image sizes
    - [x] Mug name in bold, slightly bigger font
    - [x] Align year under name, not after 

### Wanted Page: 
- [ ] List of mugs to look out for 
    - [ ] ???

### Detail Page: 
- [x] Single image source
- [x] Mug details, year and season information fields 
- [x] Final style fixes
    - [x] Align image and text from top, not bottom
    - [x] Row based on medium and larger, column based on smaller screens 

### Admin: 
- [x] use localStorage for the mugs 
- [x] Add new records
    - [x] Web form 
    - [x] Base64 strings for images 
- [x] Update information on existing records 
    - [x] update link on details page or list on admin side?
- [x] Admin panel
    - [x] Text backups of localStorage content 
        - [x] export and import functions w/ JSON format validation for import function  

### Add Page: 
- [x] LocalStorage updates properly 
- [x] Web form to submit new mugs
- [ ] Add selector for owned / wanted mug 
- [x] Final style fixes 
    - [x] Add number for mugs
    - [x] Fixed alignment issues in form 

### Delete Page: 
- [x] Delete records
    - [x] List on separate page with delete button on each row
    - [x] LocalStorage updates 
- [ ] Delete functionality for wanted mugs (Second list under owned mugs?)
- [x] Final style fixes 
    - [x] Fix list items - same list as Edit page but with added delete button 
    - [x] Align list to top and center of page 

### Edit Mug Page: 
- [x] List to choose mug from 
- [x] Use same form as from Add Mug
- [x] Fix errors with updating data 


### Error Page:
- [ ] Customised page with error message
    - [ ] Confused looking moomin?



### Other Components: 
- [x] Header / Navigation bar
    - [x] Small logo
    - [x] Project title 
    - [x] Navigation links in opposite corner (login etc) 
    - [x] Hide logo on admin pages for smaller screens
    - [x] Center align admin links on smaller screens 
- [x] Final style fixes
- [ ] Footer with links to github page


### Other Tasks: 
#### Project organisation: 
- [x] index files for exporting & importing components
- [x] start with local json file for data 


#### Styling: 
- [ ] Find a font 
- [x] Fix sizes for smaller break points
    - [x] Widths of containers 
    - [x] Image sizes on home page 
    - [x] Customise the inputs on Add and Edit pages 

#### Other: 
- [ ] Global state management, useContext? 
- [x] AdminLayout initially empty, fix
- [x] Reusable FormField component for add and edit forms 
- [ ] Customised alert fields, temporary feedback modals for add and edit fields upon form submission 
