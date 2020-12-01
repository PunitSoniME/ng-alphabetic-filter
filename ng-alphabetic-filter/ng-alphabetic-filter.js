angular
    .module("ng-alphabetic-filter", [])
    .directive("alphabeticFilter", function () {

        var controller = function ($scope) {

            var vm = this;

            vm.data = $scope.data;
            vm.mainDataSource = $scope.data;
            vm.propertyToFilter = $scope.propertyToFilter;
            vm.clearButtonColor = $scope.clearButtonColor;
            vm.bootstrapButtonSize = $scope.bootstrapButtonSize;
            vm.bootstrapButtonColor = $scope.bootstrapButtonColor;

            vm.characterFilters = [];

            //  Functions
            vm.sortDataSource = sortDataSource;
            vm.filterFromCharacter = filterFromCharacter;
            vm.enableDisableFilters = enableDisableFilters;

            if (vm.bootstrapButtonColor == null || vm.bootstrapButtonColor == undefined) {
                vm.bootstrapButtonColor = "default";
            }

            if (vm.clearButtonColor == null || vm.clearButtonColor == undefined) {
                if (vm.bootstrapButtonColor != null && vm.bootstrapButtonColor != undefined)
                    vm.clearButtonColor = vm.bootstrapButtonColor;
            }

            var aToZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

            enableDisableFilters();

            function filterFromCharacter(filter) {
                if (filter == null) {
                    sortDataSource();
                } else {
                    $scope.data = vm.mainDataSource.filter(function (record) {
                        return record[vm.propertyToFilter][0].toUpperCase() == filter.text;
                    });

                    // vm.data = _.orderBy(_.filter(vm.mainDataSource, (record) => {
                    //     return record[vm.propertyToFilter][0].toUpperCase() == filter.text;
                    // }), "name", "asc");
                }
            }

            function sortDataSource() {
                angular.copy(vm.mainDataSource, $scope.data);
            }

            function enableDisableFilters() {
                vm.characterFilters = [];

                aToZ.forEach(function (az) {
                    vm.characterFilters.push({
                        text: az,
                        isDisabled: true
                    })
                });

                var firstLetters = [];

                vm.data.forEach(function (record) {
                    firstLetters.push(record[vm.propertyToFilter][0].toUpperCase());
                });

                var uniqueFirstLetters = [...new Set(firstLetters)];

                vm.characterFilters.forEach(function (character) {
                    var index = uniqueFirstLetters.indexOf(character.text);
                    if (index > -1) {
                        character.isDisabled = false;
                    }
                });
            }
        };

        return {
            transclude: true,
            restrict: "EA",
            replace: false,
            templateUrl: "./ng-alphabetic-filter/ng-alphabetic-filter.tmpl.html",
            scope: {
                //.."@": One way binding
                //.."=": Two way binding
                bootstrapButtonSize: "@",
                bootstrapButtonColor: "@",
                clearButtonColor: "@",
                propertyToFilter: "@",
                data: "="
            },
            require: [],
            controller: controller,
            controllerAs: "vm",
            link: function (scope, element, attribute, controller) {
               
            }
        }
    });