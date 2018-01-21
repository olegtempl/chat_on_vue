<template>
 <!-- главное окно, видно всегда-->
        <div class="chat">
            <!-- открытие окна чата с полями для ввода и т.д -->
            <button v-on:click="chatWindowCall"> GO </button>


            <div v-bind:class="{open : isOpen , close : isClose }">
                <!-- блок для сообщений  -->
                <ul class="chat__list">
                    <!-- выводим список всех сообщений -->
                    <li class="chat__list-item" v-for="message in messages" track-by="$index">{{ message }}</li>
                </ul>

                <!-- поле ввода текста сообщения  -->
                <input type="text" class="chat__input" v-model="message" v-on:keydown="send" placeholder="Type a message">
            
                
            </div>

        </div>
    <!-- 
                    для счета количества введенных букв и сообщений
    -->

           <!-- <p>       -->
            <!-- {{ lettersInMessage }} -->
            <!-- {{ messagesInChat   }}       --> <!-- допилить если нужно -->

          <!-- </p>  -->

</template>

<script>
export default {
    el: '.chat',
    data: {
        isOpen: false,      // отвечает за открытие
        isClose: true,      // отвечает за закрытие
        message: '',        // текст сообщения
        messages: []        // массив всех сообщений в чате
    },
    methods: {
        send: function (e) {            // enter отправляет сообщеньки
            if (e.keyCode !== 13) {
                return;
            }

            // отправка через сокет на сервер вводимого сообщения 
            socket.emit('message.sent', this.message);
            // очищаем поле ввода после отправки
            this.message = '';                    
        },
        chatWindowCall: function () {       // меняет состояние окна диалога 
            if (this.isOpen == true) {
                this.isOpen = false;
                this.isClose = true;
            } else {
                this.isOpen = true;
                this.isClose = false;
            }
        }
    },
    ready: function () {
        // this.socket = io();

        socket.on('message', function (message) {
            this.messages.push(message);
        }.bind(this));
    },
    computed: {
        // lettersInMessage: function () {     // следим за количеством букв в сообщении
        //     return this.message.length
        // },
        // messagesInChat: function(){       // следим за количеством букв в сообщении
        //     return this.messages.length
        // }
    }
}


// import  from './.vue'     
// import  from './.vue'           
// import  from './.vue'
// import  from './.vue'

</script>

<style lang="scss">
//colors
$red: red;          // цвет бордера
$color_wild_sand_approx: #f5f5f5;       // цвет ввода инпута
/* 

 */
body, html {
    margin: 0;
    color: #555;
    // font: 100% "Roboto";
}

div {
	.open {
		width: 30%;
		border: $red 2px solid;
		height: 100%;
		.chat__list {
			list-style-type: none;
			padding: 0;
			margin: 0;
		}
		.chat__list-item {
			padding: 10px;
			font-size: .9em;
			&:nth-child(odd) {
				background-color: $color_wild_sand_approx;
			}
		}
		.chat__input {
			position: fixed;
			bottom: 0;
			width: 30%;
			padding: 10px;
			border: 3px solid $red;
			font-size: .9em;
		}
	}
	.close {
		height: 100px;
		width: 30%;
		border: $red 2px solid;
		.chat__list {
			display: none;
		}
		.chat__input {
			display: none;
		}
	}
}
button {
	border: 2px solid $red;
	margin: 5px;
	width: 55px;
	height: 25px;
}


</style>


	


