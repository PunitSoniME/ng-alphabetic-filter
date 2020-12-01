# Angular Alphabetic Filter directive

Directive to use filter functionality using A-Z buttons

# How to install
    npm i ng-alphabetic-filter --save

# Path
    <script src="./node_modules/ng-alphabetic-filter/ng-alphabetic-filter.js" ></script>

# How to use
    js - angular.module("my-app", ['ng-alphabetic-filter']);
    html - <alphabetic-filter data="dataSource" property-to-filter="name"></alphabetic-filter>

# Dependencies
    angularjs > 1.x.x

# Required fields
    data
    property-to-filter ( property-to-filter is case sensitive )
    
# Other properties

| Property | Description / Value | Required |
| -------- | ----- | -------- |
| data | DataSource | Yes |
| property-to-filter | Property name of the object to do filter | Yes |
| bootstrap-button-color | 'btn btn-default' / 'btn btn-primary' / 'btn btn-success' / 'btn btn-warning', 'btn btn-info' / 'btn btn-danger' | No |
| bootstrap-button-size | 'btn-xs' / 'btn-sm' / 'btn-md' / 'btn-lg' / 'btn-xl' | No |
| clear-button-color | 'btn btn-danger' | No |

# Example
    <alphabetic-filter
        data="vm.dataSource"
        property-to-filter="name"
        bootstrap-button-color="btn btn-primary"
        bootstrap-button-size="btn-md"
        clear-button-color="btn btn-danger"
        >
    </alphabetic-filter>


# Check above example here
### https://punitsonime.gitlab.io/ng-alphabetic-filter

# Note
- To use bootstrap-button-color, bootstrap-button-size, clear-button-color properties bootstrap is required.
- Currently working on only fields which have string value

# How to test this directive
 Install browser-sync globally to run local server
 
    - npm i browser-sync -g
    - Now run "npm start" command after installing ng-alphabetic-filter package.


