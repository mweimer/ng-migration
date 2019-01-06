function directive() {
    return {
        link: function(scope, element, attrs) {

            element.on('dblclick', (evt) => {
                alert(scope.session.description);
            });

        }
    };
}

export default directive;