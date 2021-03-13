// remindコマンド
const REMINDCOMMAND = '/remind';

// Vue.js
var app = new Vue({
    el : '#app',
    data : {
        sendtarget: '',
        messege: '',
        datetime1: 'default',
        datetime2: '',
        command: REMINDCOMMAND
    },
    computed: {
        selectedcustom() {
            return this.datetime1 != 'custom';
        }
    },
    watch: {
        sendtarget: function() {
            this.createCommand();
        },
        messege: function() {
            this.createCommand();
        },
        datetime1: function() {
            console.log("watch実行");
            this.createCommand();
        },
        datetime2: function() {
            this.createCommand();
        }
    },
    methods: {
        createCommand: function() {

            this.command = REMINDCOMMAND;
            let bindarray = new Array();
            bindindex = 0;

            // 通知対象を取得する
            if (this.sendtarget != '') {
                console.log(this.sendtarget);
                bindarray[bindindex] = this.sendtarget;
                bindindex++;
            }

            // メッセージを取得する
            if (this.messege != '') {
                console.log(this.messege);
                let convertmessege =
                    '"' + this.messege + '"';
                bindarray[bindindex] = convertmessege;
                bindindex++;
            }

            // 通知日時を取得する
            if (this.datetime1 != '' && this.datetime1 != 'default') {

                console.log(this.datetime1);
                console.log(this.datetime2);
                let convertdatetime;
                // 日時指定の場合
                if (this.datetime1 === 'custom') {
                    convertdatetime = this.datetime2;
                // 日時指定以外の場合
                } else {
                    convertdatetime = this.datetime1;
                }
                bindarray[bindindex] = convertdatetime;
                bindindex++;
            }

            for (i = 0; i < bindindex; i++) {
                console.log(bindarray[i]);
                this.command += ' ' + bindarray[i];
            }
        }, copyToClipboard: function() {
            
            // コピー対象をJavaScript上で変数として定義する
            var copyTarget = document.getElementById("command");

            // コピー対象のテキストを選択する
            copyTarget.select();

            // 選択しているテキストをクリップボードにコピーする
            document.execCommand("Copy");

            console.log(copyTarget.value);
        }
    }
});