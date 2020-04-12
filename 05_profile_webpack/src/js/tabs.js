(function () {


    var state = {
        tabs: {
            position: {
                current: 0,
                previous: 0
            },
            checked: {
                current: {
                    tab_id: 'tab1',
                    content_id: 'content-tab1'
                },
                previous: {
                    tab_id: 'tab1',
                    content_id: 'content-tab1'
                }
            }
        }
    }


    /**
     * Получить позицию табов
     * @param  {number} nextX
     * @param  {number} prevX
     * @return {number}
     */
    var getPositionTabs = function (nextX, prevX) {
        if (!prevX) {
            return 0;
        }

        return nextX - prevX;
    }
    

    /**
     * Движение табов касанием
     * @param  {object} event
     */
    var touchMoveTabs = function (event) {
        var SCROLL_X = (this.scrollWidth - this.clientWidth) * -1;

        var next_position = event.changedTouches[0].screenX;
        var cur_position = state.tabs.position.current + getPositionTabs(next_position, state.tabs.position.previous)
        
        // если выходим за пределы родительского контейнера
        if (cur_position > 0 || cur_position < SCROLL_X) {
            return;
        }

        state.tabs.position.current = cur_position;
        state.tabs.position.previous = next_position;
        tabs.style.left = cur_position + 'px';
    }


    /**
     * Скрыть контент для таба
     * @param  {string} content_id
     * @return {null}
     */
    var hideContent = function(content_id) {
        var content = document.querySelector('#' + content_id);
        content.classList.remove('content_active');
        return null;
    }


    /**
     * Отобразить контент для таба
     * @param  {string} content_id
     * @return {object}
     */
    var showCurrentContent = function() {
        var content = document.querySelector( '#' + state.tabs.checked.current.content_id );
        content.classList.add('content_active');

        return {
            tab_id: state.tabs.checked.current.tab_id,
            content_id: state.tabs.checked.current.content_id
        };
    }



    // точка входа

    var tabs = document.querySelector('.js_tabs');
    if (tabs) {    
        // обнулить последнюю позицию, когда событие touchmove завершено
        tabs.addEventListener('touchend', function () {
            state.tabs.position.previous = 0;
        });

        tabs.addEventListener('touchmove', touchMoveTabs);
    }

    // вешаем обработчик на каждую вкладку
    var elemsTab = document.querySelectorAll('.js_tabs input');
    for (var i = 0; i < elemsTab.length; i++) {
        elemsTab[i].addEventListener('click', function () {
            var checked = state.tabs.checked;
            
            var sId = this.id.toString();
            var currentTab = {
                tab_id: sId,
                content_id: 'content-' + sId
            }
    
            checked.current = currentTab;
            checked.previous = hideContent(checked.previous.content_id);
            checked.previous = showCurrentContent();
        });
    }
})();