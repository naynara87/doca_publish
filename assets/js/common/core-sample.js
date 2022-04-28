$(document).ready(function () {
    //left메뉴 세부 내용 펼치기
    var lnbUI = {
        click : function (target, speed) {
          var _self = this,
              $target = $(target);
          _self.speed = speed || 300;
          
          $target.each(function(){
            if(findChildren($(this))) {
              return;
            }
            $(this).addClass('noDepth');
          });
          
          function findChildren(obj) {
            return obj.find('> ul').length > 0;
          }
          
          $target.on('click','a', function(e){
              e.stopPropagation();
              var $this = $(this),
                  $depthTarget = $this.next(),
                  $siblings = $this.parent().siblings();
            
            $this.parent('li').find('ul li').removeClass('active');
            $siblings.removeClass('active');
            $siblings.find('ul').slideUp(250);
            if($depthTarget.css('display') == 'none') {
                $('.vertical__3dpt').css('display','none');
                _self.activeOn($this);
                $depthTarget.slideDown(_self.speed);
            } else {
                $depthTarget.slideUp(_self.speed);
                _self.activeOff($this);
            }
            
          })
          
        },
        activeOff : function($target) {
          $target.parent().removeClass('active');
        },
        activeOn : function($target) {
          $target.parent().addClass('active');
        }
      };
      
      
      // Call lnbUI
      lnbUI.click('.vertical__menu li', 300);



    //left메뉴 사이드 미니 사이즈로 열고 닫기
    var menu1dpt = $('.vertical__menu li');
    var leftMenuToggle = $('.btn_left-toggle');
    var leftMenu = $('.leftbar');
    var mainContents = $('.main-contents');
    var menuFold = "false";
    leftMenuToggle.click(function () {
        leftMenu.toggleClass('min-size');
        $(this).toggleClass('unfold');
        mainContents.toggleClass('expanded-left');
        if(menuFold == "true"){
            leftMenuToggle.attr("title","메뉴접기");
            menuFold = "false";
            return
        }else{
            leftMenuToggle.attr("title","메뉴펼치기"); 
            menuFold = "true";
        }
    })

    //aside-right tab 열고 닫기
    var rightTabToggle = $('#rightTabToggle');
    var rightTabToggleOpen = $('#rightTabToggleOpen');
    var asideRight = $('.aside-right');
    var asideMin = $('.doca__min-detail-bar');
    var docaHeader = $('.doca__detail-header');
    rightTabToggle.click(function () {
        asideRight.addClass('min-size');
        asideMin.addClass('on');
        docaHeader.addClass('hidden');
    })
    rightTabToggleOpen.click(function () {
        asideRight.removeClass('min-size');
        asideMin.removeClass('on');
        docaHeader.removeClass('hidden');
    })

    //doca-card 체크시 addClass active
    var cardCheckbox = $('input[name=card-checkbox]');
    var cardImg = $(".doca__card-img");
    var keywordBtn = $(".btn__keyword");


    cardCheckbox.click(function () {
        if ($(this).is(":checked")) {
            $(this).parents('.doca__card').addClass('active');
            // chkList.prop("checked", true);
        } else
            $(this).parents('.doca__card').removeClass('active');
        // chkList.prop("checked", false);
    });

    //AI 유사키워드 클릭시 addClass on
    keywordBtn.click(function () {
        $(this).toggleClass('on');
        console.log('key')
    })

    //정렬모드 list형 그리드 형 변경


    //상세버튼 모달창 열기


    //카드 리스트 토글버튼
    var gridOptionButton = $('.grid__option-button > button');
    //드롭다운 메뉴 클리시 아이콘 변경 및 그리드 스타일 변경
    var gridViewHtml = `
    <div class="col__card">
        <div class="doca__card active">
            <div class="doca__card-header">
                <label>
                    <input class="checkbox" name="card-checkbox" name="card-checkbox" type="checkbox"
                        checked="checked">
                    <span class="control__check"></span>
                </label>
                <button title="더보기" class="btn__icon"><i class="doca-more-fill"></i></button>
            </div>
            <div class="doca__card-img">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="카드제목">
            </div>
            <div class="doca__card-details">
                <h3 class="doca__card-title" title="업무 및 정보기술 요건업무 및 정보기술 요건업무 및 정보기술 요건">업무 및 정보기술 요건업무
                    및 정보기술 요건업무 및 정보기술 요건</h3>
                <div class="tag__group">
                    <span class="tag">시각</span>
                    <span class="tag">시각</span>
                    <span class="tag">시각</span>
                    <div class="tag-more">+4</div>
                </div>
                <ul class="doca__card-info">
                    <li>
                        <label>생성일</label>
                        <span>2021-05-11 (23/47페이지)</span>
                    </li>
                    <li>
                        <label>출처</label>
                        <span>나윤주</span>
                    </li>
                </ul>
                <div class="doca__card-footer">
                    <button class="btn__doca btn__download">원본 다운로드</button>
                    <button class="btn__icon btn__search" title="미리보기" data-toggle="tooltip"><i
                            class="doca-search-line"></i></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col__card">
        <div class="doca__card">
            <div class="doca__card-header">
                <label>
                    <input class="checkbox" name="card-checkbox" type="checkbox">
                    <span class="control__check"></span>
                </label>
                <button title="더보기" class="btn__icon"><i class="doca-more-fill"></i></button>
            </div>
            <div class="doca__card-img">
                <img src="./assets/images/main/sampleimg.png" alt="카드제목">
            </div>
            <div class="doca__card-details">
                <h3 class="doca__card-title" title="업무 및 정보기술 요건업무 및 정보기술 요건업무 및 정보기술 요건">업무 및 정보기술 요건업무
                    및 정보기술 요건업무 및 정보기술 요건</h3>
                <div class="tag__group">
                    <span class="tag">시각</span>
                    <span class="tag">시각</span>
                    <span class="tag">시각</span>
                    <div class="tag-more">+4</div>
                </div>
                <ul class="doca__card-info">
                    <li>
                        <label>생성일</label>
                        <span>2021-05-11 (23/47페이지)</span>
                    </li>
                    <li>
                        <label>출처</label>
                        <span>나윤주</span>
                    </li>
                </ul>
                <div class="doca__card-footer">
                    <button class="btn__doca btn__download">원본 다운로드</button>
                    <button class="btn__icon btn__search" title="미리보기" data-toggle="tooltip"><i
                            class="doca-search-line"></i></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col__card">
        <div class="doca__card">
            <div class="doca__card-header">
                <label>
                    <input class="checkbox" name="card-checkbox" type="checkbox">
                    <span class="control__check"></span>
                </label>
                <button title="더보기" class="btn__icon"><i class="doca-more-fill"></i></button>
            </div>
            <div class="doca__card-img">
                <img src="./assets/images/main/sampleimg.png" alt="카드제목">
            </div>
            <div class="doca__card-details">
                <h3 class="doca__card-title" title="업무 및 정보기술 요건업무 및 정보기술 요건업무 및 정보기술 요건">업무 및 정보기술 요건업무
                    및 정보기술 요건업무 및 정보기술 요건</h3>
                <div class="tag__group">
                    <span class="tag">시각</span>
                    <span class="tag">시각</span>
                    <span class="tag">시각</span>
                    <div class="tag-more">+4</div>
                </div>
                <ul class="doca__card-info">
                    <li>
                        <label>생성일</label>
                        <span>2021-05-11 (23/47페이지)</span>
                    </li>
                    <li>
                        <label>출처</label>
                        <span>나윤주</span>
                    </li>
                </ul>
                <div class="doca__card-footer">
                    <button class="btn__doca btn__download">원본 다운로드</button>
                    <button class="btn__icon btn__search" title="미리보기" data-toggle="tooltip"><i
                            class="doca-search-line"></i></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col__card">
        <div class="doca__card">
            <div class="doca__card-header">
                <label>
                    <input class="checkbox" name="card-checkbox" type="checkbox">
                    <span class="control__check"></span>
                </label>
                <button title="더보기" class="btn__icon"><i class="doca-more-fill"></i></button>
            </div>
            <div class="doca__card-img">
                <img src="./assets/images/main/sampleimg.png" alt="카드제목">
            </div>
            <div class="doca__card-details">
                <h3 class="doca__card-title" title="업무 및 정보기술 요건업무 및 정보기술 요건업무 및 정보기술 요건">업무 및 정보기술 요건업무
                    및 정보기술 요건업무 및 정보기술 요건</h3>
                <div class="tag__group">
                    <span class="tag">시각</span>
                    <span class="tag">시각</span>
                    <span class="tag">시각</span>
                    <div class="tag-more">+4</div>
                </div>
                <ul class="doca__card-info">
                    <li>
                        <label>생성일</label>
                        <span>2021-05-11 (23/47페이지)</span>
                    </li>
                    <li>
                        <label>출처</label>
                        <span>나윤주</span>
                    </li>
                </ul>
                <div class="doca__card-footer">
                    <button class="btn__doca btn__download">원본 다운로드</button>
                    <button class="btn__icon btn__search" title="미리보기" data-toggle="tooltip"><i
                            class="doca-search-line"></i></button>
                </div>
            </div>
        </div>
    </div>
    <div class="col__card">
        <div class="doca__card">
            <div class="doca__card-header">
                <label>
                    <input class="checkbox" name="card-checkbox" type="checkbox">
                    <span class="control__check"></span>
                </label>
                <button title="더보기" class="btn__icon"><i class="doca-more-fill"></i></button>
            </div>
            <div class="doca__card-img">
                <img src="./assets/images/main/sampleimg.png" alt="카드제목">
            </div>
            <div class="doca__card-details">
                <h3 class="doca__card-title" title="업무 및 정보기술 요건업무 및 정보기술 요건업무 및 정보기술 요건">업무 및 정보기술 요건업무
                    및 정보기술 요건업무 및 정보기술 요건</h3>
                <div class="tag__group">
                    <span class="tag">시각</span>
                    <span class="tag">시각</span>
                    <span class="tag">시각</span>
                    <div class="tag-more">+4</div>
                </div>
                <ul class="doca__card-info">
                    <li>
                        <label>생성일</label>
                        <span>2021-05-11 (23/47페이지)</span>
                    </li>
                    <li>
                        <label>출처</label>
                        <span>나윤주</span>
                    </li>
                </ul>
                <div class="doca__card-footer">
                    <button class="btn__doca btn__download">원본 다운로드</button>
                    <button class="btn__icon btn__search" title="미리보기" data-toggle="tooltip"><i
                            class="doca-search-line"></i></button>
                </div>
            </div>
        </div>
    </div>
    `
    var listViewHtml = `
    <table class="doca__table">
        <colgroup>
            <col width="50%"/>
            <col width="30%"/>
            <col width="20%"/>
        </colgroup>
        <thead>
            <tr>
                <th>이름</th>
                <th>수정일</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><i></i><a href="#">제안서</a></td>
                <td class="update-day">2021.10.08 11:57</td>
                <td class="table__option-right"><button title="더보기" class="btn__icon"  data-toggle="tooltip"><i class="doca-more-fill"></i></button></td>
            </tr>
            <tr>
                <td><i></i><a href="#">제안서</a></td>
                <td class="update-day">2021.10.08 11:57</td>
                <td class="table__option-right"><button title="더보기" class="btn__icon"  data-toggle="tooltip"><i class="doca-more-fill"></i></button></td>
            </tr>
            <tr>
                <td><i></i><a href="#">제안서</a></td>
                <td class="update-day">2021.10.08 11:57</td>
                <td class="table__option-right"><button title="더보기" class="btn__icon"  data-toggle="tooltip"><i class="doca-more-fill"></i></button></td>
            </tr>
        </tbody>
    </table>
    `
    
    gridOptionButton.click(function (e) {
        dropdownShow = "false";
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        var listStyle = $(this).data("list");
        
        switch (listStyle) {
            case "grid":
                searchResults.addClass('doca__grid-veiw');
                searchResults.removeClass('doca__list-veiw');
                searchResults.html(gridViewHtml);
                break;
            case "list":
                searchResults.addClass('doca__list-veiw');
                searchResults.removeClass('doca__grid-veiw');
                searchResults.html(listViewHtml);
                break;
        }
    });
    //tooltip 세팅
    $('[data-toggle="tooltip"]').tooltip(
        {
            position: {
                my: "center top+45",
                at: "center top",
                using: function( position, feedback ) {
                  $( this ).css( position );
                  $( "<div>" )
                    .addClass( "arrow" )
                    .addClass( feedback.vertical )
                    .addClass( feedback.horizontal )
                    .appendTo( this );
                }
              }
        }
    );

    //프로필 클릭 드롭다운
    // $('.btn__user-info').click(function (e) {
    //     $(this).next('.user__menu-drop').toggleClass('show');
    // })

    $('.doca__user-info').on('click', '.user-button',function(e){
        $(this).children('.menu__drop').toggleClass('show');
        $(this).siblings('.menu__drop').removeClass('show');
    });

    // 모달창 열기
    $('[data-toggle="modal"]').click(function(e){
        var target = $(this).data('target');
        $(target).addClass('show');
    })


    //모달창 닫기
    $('[data-dismiss="modal"]').click(function(e){
        $(this).parents('.doca__modal').removeClass('show');
    })


    //progress 선택
    // on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });
    function moveProgressBar() {
        var capacity = $('.storage__capacity-progress');
        var capacityBar = $('.storage__capacity-progress-bar');
        var getPercent =  capacityBar.data('valuenow') + "%";
        capacityBar.css("width", getPercent);
    }

});
