var Term = {

    invokeTerm : function(){
        var term = $("#term");
        if (term.length){
            term.remove();  //maybe later keep state
            Game.engine.unlock();
            return true;
        } else {
            Game.engine.lock();
            var termDiv = document.createElement('div');
            termDiv.id = 'term';
            document.body.appendChild(termDiv);
            $(termDiv).terminal(function(command, terminal) {
                terminal.echo('you type command "' + command + '"');
            }, {
                greetings: 'UNIX V6.1 beta',
                name: 'js_demo',
                prompt: '$ '
            });
        }
    }

};


