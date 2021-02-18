import Hikes from "./hikes.js";

class Comments {
    constructor(element) {
        this.element = document.getElementById(element);
        this.type = 'hikes';
    } 

    showComments(type) {
        this.type = type;
        let comments = this.getComments();
        if(type != 'hikes') {
            comments = comments.filter(comment => { 
                if(comment.name == type) return comment;
            });
        } else {
            this.element.innerHTML = '';
        }
        comments.forEach(comment => {
            this.displayComment(comment);
        });
    }

    getComments() {
        const comments = JSON.parse(localStorage.getItem('comments'));
        if(comments == null) {
            return [];
        } else {
            return comments;
        }
    }

    displayComment(comment) {
        let item = document.createElement('li');
        item.innerHTML = `${comment.name}: ${comment.date}: ${comment.content}`;
        this.element.appendChild(item);
    }

    createComment(hikeName, content) {
        const comment = {
            name: hikeName,
            date: new Date(),
            content: content
        };
        let comments = this.getComments();
        comments.push(comment);
        this.saveComments(comments);
    }

    saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    inputComment() {
        const t = this;
        const html = `<br><br><h2>Comments</h2>
        <textarea style="width:300px; height: 100px"; id="inputComment"></textarea><br>
        <button id="createComment" type="button">Comment</button>
        `;
        this.element.innerHTML = html;
        const button = document.getElementById('createComment');
        button.addEventListener('click', function() {
            const ta = document.getElementById('inputComment');
            const comment = ta.value;
            const hikeName = document.getElementsByClassName('hikeName')[0].innerHTML;
            t.createComment(hikeName, comment);
            t.inputComment();
            setTimeout(t.showComments(t.type), 500);
        });
    }
}

export default Comments;