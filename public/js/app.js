var app = angular.module('ngTodo', []);


app.controller('TodoController', function($scope){
  $scope.todoList = [{
                      text:"Math",
                      link:"http://www.k5learning.com/worksheets/math/grade-3-multiplication-table-2to5-f.pdf" },
                    //
                     { text:"English Grammar",
                       link:"http://www.k5learning.com/sites/all/files/worksheets/grammar-worksheet-grade-1-adjectives-1.pdf"
                     },
                     { text:"Reading Comprehension",
                       link:"http://www.k5learning.com/sites/all/files/worksheets/grammar-worksheet-grade-1-adjectives-1.pdf"
                     },
                     { text:"Science",
                      link:"science/types-of-invertebrates.jpg"
                    },
                    { text:"Geography",
                      link:"geography/Map_Study.pdf"
                    }
                    ];

  $scope.saveTodo = function(){
    var todoInfo = $scope.currentTodo;
    $scope.todoList.push(todoInfo);
    $scope.currentTodo = "";
  }
  // $scope.removeTodo = function(singleTodo){
  //   var index = $scope.todoList.indexOf(singleTodo);
  //  $scope.todoList.splice(index, 1);
  // }
});

  // $scope.checkbox(function () {
  //   $scope.input type="checkbox"]:checked+label{ text-decoration: line-through; }
  // })

//   $scope.checkbox(function () {
//     $('input:checkbox').on('change', function () {
//         var input = $(this).next('span');
//         if (this.checked) {
//             $(input).css('textDecoration', 'line-through');
//         } else {
//             $(input).css('textDecoration', 'none');
//         }
//     })
// })
