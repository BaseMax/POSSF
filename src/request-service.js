(function () {

    const $add_repo = $('#add_repo'),
        $repo_link = $('#repo_link'),
        $repository = $('#repository'),
        $repo = $('#repo')

    $add_repo.on('click', function (event) {

        event.preventDefault();

        const repositoryValue = $repository.val()

        if (repositoryValue === '') {
            return;
        }

        let lastslashindex = repositoryValue.lastIndexOf('/');
        let result = repositoryValue.substring(lastslashindex + 1);

        const tag = `<div id="repo" class="repo-link">${result}</div>`

        $repo_link.append(tag).on('click', 'div', function () {
            this.remove()
        })

        $repository.val(null)
    })
})();
