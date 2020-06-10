document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('main_table')
    const applicationModal = document.getElementById('application_modal')
    const applicationCancel = document.getElementById('application_close')
    const approveBtn = document.getElementById('approve-btn')


    // Все манипуляции с таблицей
    table.addEventListener('click', (e) => {
        const target = e.target

        // Событие на нажатие чекбокса у элемента таблицы
        if (target.classList.contains('td_checkbox')) {
            const tr = target.closest('.table_tbody-tr')
            tr.classList.toggle('active')
        }

        // Событие нажатие на чекбокс у шапки
        if (target.classList.contains('th_checkbox')) {
            const trList = Array.from(document.getElementsByClassName('table_tbody-tr'))
            const checkboxList = Array.from(document.getElementsByClassName('td_checkbox'))
            trList.map((tr, id) => {
                if (tr.classList.contains('active')) {
                    checkboxList[id].click()
                }
            })
        }

        // Нажатие на шапку с датой (для сортировки)
        if (target.classList.contains('th-date')) {
            if (target.classList.contains('sort-down')) {
                target.classList.remove('sort-down')
                target.classList.add('sort-up')
            }

            else if(target.classList.contains('sort-up')) {
                target.classList.remove('sort-up')
            } 
            else {
                target.classList.add('sort-down')
            }
        }

        // Нажатие на шапку с ФИО (для сортировки)
        if (target.classList.contains('th-fio')) {
            if (target.classList.contains('sort-down')) {
                target.classList.remove('sort-down')
                target.classList.add('sort-up')
            }

            else if(target.classList.contains('sort-up')) {
                target.classList.remove('sort-up')
            } 
            else {
                target.classList.add('sort-down')
            }
        }
    })

    approveBtn.addEventListener('click', () => {
        toggleApplicationModal()
    })

    applicationModal.addEventListener('click', (e) => {
        const target = e.target

        if ( (target === applicationModal) || (target.classList.contains('close_button')) ) {
            toggleApplicationModal()
        }
    })

    applicationCancel.addEventListener('click', (e) => {
        e.preventDefault()
        toggleApplicationModal()
    })


    toggleApplicationModal = () => {
        applicationModal.classList.toggle('active')
        document.body.classList.toggle('modal')
    }

})