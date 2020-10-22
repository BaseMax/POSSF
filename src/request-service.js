(function () {
    const $send_email = $('#send_email'),
        $add_repo = $('#add_repo'),
        $repo_link = $('#repo_link'),
        $repository = $('#repository'),
        $repo = $('#repo')

    $add_repo.on('click', function () {

        // const suburl = new URL($repository.val()).hostname

        const repositoryValue = $repository.val()
        let lastslashindex = repositoryValue.lastIndexOf('/');
        let result= repositoryValue.substring(lastslashindex  + 1);
        const tag = `<div id="repo" class="repo-link">${result}</div>`
        $repo_link.append(tag).on('click', 'div', function () {
            console.log($(this).text())
            this.remove()
        })
        $repository.val(null)
    })




    $send_email.submit(async function (event) {
        event.preventDefault();
        const email = $('#email').val();

        const formData = new FormData($send_email[0]);

        // fetch('https://opensource.com/campaign/eidtaeid99/mail.php', {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then(function (response) {
        //         window.alert('ایمیل شما با موفقیت ارسال شد')
        //     })
    })
})();
