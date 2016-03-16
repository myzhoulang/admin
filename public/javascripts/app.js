(function (angular, $) {
  'use strict';

  var app = angular.module('app', []);
  var datas = [
    {
      name: '自营商品',
      id: 1
        },
    {
      name: '测试供应商',
      id: 2
        },
    {
      name: '杭州尚达汽配有限公司',
      id: 3
        },
    {
      name: '杭州万品汽配城联沃汽车配件商行',
      id: 4
        },
    {
      name: '宁波市海曙顺风汽配商行',
      id: 5
        },
    {
      name: '宁波市海曙顺风汽配商行',
      id: 6
        },
    {
      name: '杭州东楠贸易有限公司',
      id: 7
        },
    {
      name: '宁波博德联合汽配贸易有限公司',
      id: 8
        },
    {
      name: '杭州申令贸易有限公司',
      id: 9
        },
    {
      name: '浙江景厚贸易有限公司',
      id: 10
        },
    {
      name: '宁波北仑宁虹机电有限公司',
      id: 11
        },
    {
      name: '杭州轮速汽配有限公司',
      id: 12
        },
    {
      name: '广东爱车小屋实业发展股份有限公司',
      id: 13
        },
    ];
  var sugTlp = '<div class="sug">' +
    '<div class="sug-input">' +
    '<input type="search" ng-model="sugSelect.name" placeholder="输入关键字搜索" />' +
    '</div>' +
    '<div class="sug-lists" ng-show="suglists.length > 0">' +
    '<ul>' +
    '<li ng-repeat="item in suglists" ng-class="{active: iNow === $index}">{{ item.name }}</li>' +
    '</ul></div></div>';

  app.directive('sug', ['$filter', '$timeout', function ($filter, $timeout) {
    return {
      restrict: 'AE',
      template: sugTlp,
      scope: {
        source: '@',
        placeholder: '@',
        selectItem: '=',
        sugSelect: '=',
        onSearch: '&',
        onSelect: '&',
        onInput: '&',
        onBlur: '&',
        onClose: '&',
        item: '='
      },
      controller: function ($scope, $element) {
        var $sug = $($element);
        var $input = $sug.find('input[type="search"]');
        var $sugList = $sug.find('.sug-lists');
        var $ul = $sugList.find('ul');
        var $aLi = $sugList.find('li');
        var source = $scope.source;

        try {
          source = angular.fromJson(source);
        } catch (e) {
          // statements
          console.log(e);
        }


        if (angular.isArray(source)) {
          $scope.suglists = source;
        }

        angular.extend($scope, {

          open: function () {
            $sugList.show();
          },

          close: function (select) {
            $timeout(function () {
              $sugList.hide();
              $scope.onClose({
                select: select
              });
            }, 10)
          },

          select: function (select) {
            $scope.onSelect({
              select: select
            });
          },

          blur: function (keyword) {
            $scope.onBlur({
              search: {
                selectItem: $scope.selectItem,
                keyword: keyword
              }
            });
          },

          input: function (search) {
            $scope.onInput({
              search: search
            })
          },

          search: function (keyword) {
            $scope.iNow = 0;
            if (angular.isArray(source)) {
              return $filter('filter')(source, {
                name: keyword
              });
            } else {
              if (angular.isFunction($scope.onSearch)) {
                $scope.onSearch()
              }
            }
          }
        })
      },
      link: function (scope, element, attrs) {
        var $sug = $(element);
        var $input = $sug.find('input[type="search"]');
        var $sugList = $sug.find('.sug-lists');
        var $ul = $sugList.find('ul');
        var $aLi = $sugList.find('li');
        var $aLi2 = $aLi;
        var timer = null;
        var mouseoverTimer = null;
        var blurTimer = null;
        var select;
        scope.iNow = 0;

        function blur() {
          scope.blur($input.val());
          scope.close({
            selectItem: scope.selectItem,
            sugSelect: scope.sugSelect
          });
        }

        // 上下切换选项
        function move(dir) {
          if (dir === 1) {
            if (scope.iNow === $aLi.length - 1) {
              scope.iNow = 0;
            } else {
              scope.iNow++;
            }
          } else if (dir === -1) {
            if (scope.iNow === 0) {
              scope.iNow = $aLi.length - 1
            } else {
              scope.iNow--;
            }

          }
          scope.$apply();
        }

        $input.on({
          blur: blur,
          input: function (e) {
            $timeout.cancel(timer);
            var $this = $(this);
            scope.input({
              selectItem: scope.selectItem,
              keyword: $this.val()
            });
            timer = $timeout(function () {
              scope.suglists = scope.search($this.val());
              scope.iNow = 0;
              scope.open();
            }, 300);
          },
          keydown: function (e) {
            $aLi = $sugList.find('li');
            var keyCode = e.keyCode;
            switch (keyCode) {
            case 38:
              move(-1);
              break;

            case 40:
              move(1);
              break;

            case 13:
              var $item = $aLi.eq(scope.iNow);
              if ($item.length > 0) {
                $input.val($aLi.eq(scope.iNow).text());
                scope.sugSelect = angular.copy(scope.suglists[scope.iNow]);
                scope.close({
                  selectItem: scope.selectItem,
                  sugSelect: scope.sugSelect
                });
                scope.select({
                  selectItem: scope.selectItem,
                  sugSelect: scope.sugSelect
                });
              } else {
                $input.blur();
              }

              break;

            default:
              break;
            }
          }
        });

        $sug.delegate('li', 'click', function () {
          console.log('click')

          $aLi = $sugList.find('li');
          scope.iNow = $(this).index();
          var itemData = angular.copy(scope.suglists[scope.iNow]);
          scope.select({
            selectItem: scope.selectItem,
            sugSelect: itemData
          });
          scope.sugSelect = itemData;
          $input.val(itemData.name);
          scope.close({
            selectItem: scope.selectItem,
            sugSelect: select
          });
        }).delegate('li', 'mouseover', function () {
          $timeout.cancel(mouseoverTimer);
          var $this = $(this);
          mouseoverTimer = $timeout(function () {
            $aLi = $sugList.find('li');
            var index = $this.index();
            scope.iNow = index;
          }, 30);
        }).on({
          mouseover: function (e) {
            $input.off('blur');
          },
          mouseout: function (e) {
            $input.on('blur', blur);
          }
        });
      },
    }
    }]);

  //Sug Ctrl
  app.controller('SugCtrl', ['$scope', function ($scope) {

    var data = [{
      supplier: {
        name: '杭州尚达汽配有限公司',
        userId: 3
      },
      addr: {
        name: '',
        addrId: ''
      },
      addrs: [],
      num: 0
        }]

    angular.extend($scope, {
      suglists: datas,
      selected: function (select) {
        console.log(select)
        var selectItem = select.selectItem;
        var sugSelect = select.sugSelect;

        if (angular.isObject(sugSelect) && angular.isNumber(sugSelect.id)) {
          selectItem.addrs = [{
            name: '地址1',
            addrId: 1
                    }, {
            name: '地址2',
            addrId: 2
                    }, {
            name: '地址3',
            addrId: 3
          }];
          selectItem.addr = selectItem.addrs[0];
        }
      },
      close: function(select){
        $scope.$broadcast('SUG_CLOSE',select);
        
      },
      input: function (search) {
//        console.log(search)
      },
      sugInuputBlur: function (seach) {
        var selectItem = seach.selectItem;
        $scope.$broadcast('INPUT_BLUR');
        
        if (!angular.isNumber(selectItem.id)) {
          console.log('根据关键字查询id');
        }
      },
      blur: function(){
        $scope.$broadcast('INPUT_BLUR');
      },
      suppliers: data,

      addSuperlier: function () {

      }
    })
  }]);


  //切换显示兄弟元素
  app.directive('toggleSiblings', function () {
    return {
      link: function (scope, element, attrs) {
        var $this = $(element);
        var siblingsInput = $(this).siblings().find('input, textarea');
        $this.on({
          click:function () {
            $(this).toggleClass('hidden').siblings().toggleClass('hidden').find('input, textarea').focus();
          }
        });
        
        // 光标离开 隐藏
        scope.$on('INPUT_BLUR', function() {
          $this.removeClass('hidden').siblings().addClass('hidden');
        });
      }
    }
  });

})(angular, jQuery);