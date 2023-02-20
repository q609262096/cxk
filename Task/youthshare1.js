
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = ["https://focus.youth.cn/article/ws_zero?signature=bD6x5nzGA2pvRerWXy4Qm8Dv9hkN3ov4Og8LdMkQlPVqJYN0Bo&scene_id=home_feed&share_id=66538410421055051653919662806&time=1653919662806",
	       "https://focus.youth.cn/article/ws_zero?signature=5yNLlPgo6r98RX0bMW7YYjvRYuewk3d7KEVpwGOxvAqDZzBJdm&scene_id=home_feed&share_id=66538410410337501653919712144&time=1653919712144",
	       "https://focus.youth.cn/article/ws_zero?signature=NXjrme82G3An0wVvWpamq3Q8DTApXQdagq9dJKyL5YRxElM6Zo&scene_id=home_feed&share_id=66538410442808751653919723311&time=1653919723311",
	       "https://focus.youth.cn/article/ws_zero?signature=glp5xY6RDENobMmkVO75xgV33fDmBP048GPZQwnj20JBreK3Ay&scene_id=home_feed&share_id=66538410443012621653919734696&time=1653919734696",
	       "https://focus.youth.cn/article/ws_one?signature=dvG9ReJyYL36goEAWV46qA2yvcg0YQg1MQD0OPmnkw5jBl2X8Z&scene_id=home_feed&share_id=65613301426268411650596063209&time=1650596063209",
	       "https://focus.youth.cn/article/ws_one?signature=l3Q0RNe9oPxVZ6pJMA7EJZDKDsj0emjaL2XGkOKdvDynjYb5Wz&scene_id=home_feed&share_id=65613301427921711650598343311&time=1650598343311",
	       "https://focus.youth.cn/article/video?signature=lXOy8gQJwx6DGYbAEV79OmbxwSyLkRy1PzMNdL3pWmnq02kveR&ip=3395823906",
	       "https://focus.youth.cn/s/article_share_eight?signature=kzYx0ngZLqblOM65PN7LDwvm0UBxlJL7E3GQoepJDX9dv8AB2W&scene_id=home_feed&share_id=69385968464863581666884417930&time=1666884417930",
	       "https://focus.youth.cn/s/article_share_eight?signature=V5EWkpzrBZdXGYOlmQ4X0QeWxFgG89R4oK2nvbNxqe03PjJw9A&scene_id=home_feed&share_id=69385968464745051666884429298&time=1666884429298",
	       "https://focus.youth.cn/s/article_share_eight?signature=NXjrme82G3An0wVvWpamZmME5hjVY8W1gq9dJKyL5YRxElM6Zo&scene_id=home_feed&share_id=69385968455036101666884437598&time=1666884437598",
	        "https://focus.youth.cn/s/video?signature=NXjrme82G3An0wVvWpamZLjk5HjVY8W1gq9dJKyL5YRxElM6Zo&ip=3395894187",
	       "https://focus.youth.cn/article/ws_six?signature=pznrQKZ06xYeGkD5yA4wdl9GBtVYM2n78Nm2bvMqRWw9gPdLVO&scene_id=home_feed&share_id=65662476427892281650597438433&time=1650597438433",
	       "https://focus.youth.cn/article/ws_six?signature=6y30XlmbkL9oxwAjJd1PJZjxXfWJyLw7gMQE2nZKW8RNpvPrqz&scene_id=home_feed&share_id=65662476427879461650597457768&time=1650597457768",
	       "https://focus.youth.cn/article/ws_six?signature=NlWqkrwJYXnOvx5DKb1RMwodpu6Ge8Ba08g2GjM9RLeV3EPymQ&scene_id=home_feed&share_id=65662476426787601650597473500&time=1650597473500",
	       "https://focus.youth.cn/article/ws_eight?signature=5NPeoJjl0pEAqLZYQM4qpgdBOsLogPK1692Vrk3gBdwXDyWK8b&scene_id=home_feed&share_id=65742718426576511650876462818&time=1650876462818",
	       "https://focus.youth.cn/article?signature=mq63rgk0doNXbYK7Lqw5eVHklX2VSjd0LoLaEMLO9lwG2zQJeB&scene_id=article_relevant_items&share_id=65742718427345921650876575969&time=1650876575969",
	       "https://focus.youth.cn/article/ws_eight?signature=kzYx0ngZLqblOM65PN7LqZVlXHklX2VaE3GQoepJDX9dv8AB2W&scene_id=home_feed&share_id=65742718428249491650876700275&time=1650876700275",
		"https://focus.youth.cn/article/ws_five?signature=NXjrme82G3An0wVvWpamqW3KEhAedneagq9dJKyL5YRxElM6Zo&scene_id=home_feed&share_id=64365935429165841651675671345&time=1651675671345",
		"https://focus.youth.cn/article/ws_five?signature=EgVbkQOLMqvWm9RrG0a2nW99KcNLXWLa3xy6doZeXBJzln85PD&scene_id=home_feed&share_id=64365935429802951651675683338&time=1651675683338",
		"https://focus.youth.cn/article/ws_five?signature=gbJynLeRd3VA29KYqE4gmXx60IvVZ8VaDNrGQloPXZzxvOB6jW&scene_id=home_feed&share_id=64365935428283801651675691083&time=1651675691083",
	       "https://focus.youth.cn/article/ws_one?signature=DJ5qQLk6jVvNWEzxlO70m92vdFePykXa0BGyPngp83Zm9KYreM&scene_id=home_feed&share_id=64393221428785561651760506354&time=1651760506354",
	       "https://focus.youth.cn/article/ws_one?signature=VMYqRmZGljQD8pAPB3aD9ZgkXtnyEQm1Xy9O06evWJwbxoN5KL&scene_id=home_feed&share_id=64393221428261371651760687490&time=1651760687490",
	       "https://focus.youth.cn/article/ws_one?signature=glp5xY6RDENobMmkVO75xRvyAiD8dnq48GPZQwnj20JBreK3Ay&scene_id=home_feed&share_id=64393221428866551651760918693&time=1651760918693",
	       "https://focus.youth.cn/article/ws_one?signature=Zry0KPXd5RYDQVznvq4vRwPQRsXzrgL4GlE6go9mAJkeON2wjW&scene_id=home_feed&share_id=66232861438869751652781413743&time=1652781413743",
	       "https://focus.youth.cn/article/ws_one?signature=6y30XlmbkL9oxwAjJd1PJ5eNrfWMdKZ7gMQE2nZKW8RNpvPrqz&scene_id=home_feed&share_id=66232861437550521652781484095&time=1652781484095",
	       "https://focus.youth.cn/article/ws_one?signature=V5EWkpzrBZdXGYOlmQ4XBL2kZTVO8Q2aoK2nvbNxqe03PjJw9A&scene_id=home_feed&share_id=66232861438215371652781497632&time=1652781497632",
	       "https://focus.youth.cn/article/ws_four?signature=bNLQGOPvkzKWxBE3gD1MBvA8BiBDnrR4yM2eV8nrowqJXmZjY5&scene_id=home_feed&share_id=66262624438869751652947838054&time=1652947838054",
	       "https://focus.youth.cn/article/ws_four?signature=JnXBk5Pw0ALYDjZx8G4ZOZow2SLVQX07olKN2Q3yzm6VREOr9p&scene_id=home_feed&share_id=66262624429642671652947848413&time=1652947848413",
	       "https://focus.youth.cn/article/video?signature=jEPYDGOJ685MLWwrbNaAVwRejUWNDg01l3zVgQoedxKAkR20pB&ip=3395823906",
	       "https://focus.youth.cn/article/ws_six?signature=85edrWAo2wXgEPm3Qv7OOjRxEIQqGXp7lN06jZVDYx9qpkBKMb&scene_id=home_feed&share_id=66335456441107721653141416601&time=1653141416601",
	       "https://focus.youth.cn/article/ws_six?signature=N3vEgwjmRqPndZp5kr7bgzR8Euw8YOpaeoGDy9x2KzL8JAblYX&scene_id=home_feed&share_id=66335456440520891653141466309&time=1653141466309 ",
	       "https://focus.youth.cn/article/ws_six?signature=jEPYDGOJ685MLWwrbNaAVMEJViWm0ZO1l3zVgQoedxKAkR20pB&scene_id=home_feed&share_id=66335456441270831653141492038&time=1653141492038",
	       "https://focus.youth.cn/article/ws_seven?signature=JnXBk5Pw0ALYDjZx8G4ZO2nLeULObLL7olKN2Q3yzm6VREOr9p&scene_id=home_feed&share_id=66322317435335651653139240382&time=1653139240382",
	       "https://focus.youth.cn/article/ws_seven?signature=bNLQGOPvkzKWxBE3gD1MBpV6puBVkBB4yM2eV8nrowqJXmZjY5&scene_id=home_feed&share_id=66322317440477731653139266781&time=1653139266781",
	       "https://focus.youth.cn/article/ws_seven?signature=o9xqzDrKG6wJnYZ5Ek4eRQDeZtqJBqq7R3LXvBgNylVOMbA02W&scene_id=home_feed&share_id=66322317440508661653139284671&time=1653139284671",
	       "https://focus.youth.cn/article/ws_two?signature=6y30XlmbkL9oxwAjJd1PJ2Wg3FW5dmy7gMQE2nZKW8RNpvPrqz&scene_id=home_feed&share_id=66744252444829811654528601537&time=1654528601537",
	       "https://focus.youth.cn/article/ws_five?signature=nG63ezAQDowMB0vlYg4kLxb28tloLNo7L8KN5yR9XpjPOxrbdE&scene_id=home_feed&share_id=66744252420122481654528611517&time=1654528611517",
	       "https://focus.youth.cn/article/ws_five?signature=b8ne3myXKLv0lpjr2RaBZPYQWi8br2baxP5OAdZD6NYMBgwzVQ&scene_id=home_feed&share_id=66744252425207471654528618733&time=1654528618733",
	       "https://focus.youth.cn/article/ws_five?signature=o9xqzDrKG6wJnYZ5Ek4eRAKZWtqvwQv7R3LXvBgNylVOMbA02W&scene_id=home_feed&share_id=66744252423055781654528626241&time=1654528626241",
	       "https://focus.youth.cn/article/ws_one?signature=Zry0KPXd5RYDQVznvq4vRr9ZvFXzrgL4GlE6go9mAJkeON2wjW&scene_id=home_feed&share_id=66232861444120751654831723808&time=1654831723808",
	       "https://focus.youth.cn/article/ws_one?signature=DJ5qQLk6jVvNWEzxlO70m5vK6sew6JXa0BGyPngp83Zm9KYreM&scene_id=home_feed&share_id=66232861442109741654831778767&time=1654831778767",
	       "https://focus.youth.cn/article/ws_seven?signature=Kb8LA9nmqlJRV56zE31yR9gYJcj0loj4ZDNjYOMGgyPBWwreQ0&scene_id=home_feed&share_id=67046117421100151655644909719&time=1655644909719",
	       "https://focus.youth.cn/article/ws_seven?signature=EgVbkQOLMqvWm9RrG0a2nQ8j5cNZjqNa3xy6doZeXBJzln85PD&scene_id=home_feed&share_id=67046117430466931655644920902&time=1655644920902",
	       "https://focus.youth.cn/article/ws_seven?signature=Zry0KPXd5RYDQVznvq4vRxnVEcXE2vX4GlE6go9mAJkeON2wjW&scene_id=home_feed&share_id=67046117424856711655644928694&time=1655644928694",
	       "https://focus.youth.cn/article/ws_seven?signature=NqylzJV6MGKj23RQPraWqoJv0sBkrNB4EYOAgBndo9ZkDbepv5&scene_id=home_feed&share_id=67046117425972721655644937727&time=1655644937727",
	       "https://focus.youth.cn/article/ws_six?signature=5NPeoJjl0pEAqLZYQM4qppEMnfLk6qP1692Vrk3gBdwXDyWK8b&scene_id=home_feed&share_id=67309071421669861656427361105&time=1656427361105",
	       "https://focus.youth.cn/article/ws_six?signature=3pjJxr9YwmWqndeOG07NkDe9ZiR5n6maQALRvlPVyZ52g68MDz&scene_id=home_feed&share_id=67309071423055781656427410937&time=1656427410937",
	       "https://focus.youth.cn/article/ws_six?signature=b8ne3myXKLv0lpjr2RaBZLLYxs8EolWaxP5OAdZD6NYMBgwzVQ&scene_id=home_feed&share_id=67309071414036431656427423237&time=1656427423237",
	       "https://focus.youth.cn/article/ws_six?signature=NqylzJV6MGKj23RQPraWqwebrUBYLOm4EYOAgBndo9ZkDbepv5&scene_id=home_feed&share_id=67309071420516701656427433521&time=1656427433521",
               "https://focus.youth.cn/article/ws_six?signature=pznrQKZ06xYeGkD5yA4wdP3B5IVYM2n78Nm2bvMqRWw9gPdLVO&scene_id=home_feed&share_id=67309071419946721656427463106&time=1656427463106",
	       "https://focus.youth.cn/article/ws_eight?signature=bNLQGOPvkzKWxBE3gD1MBROyetBN6Kn4yM2eV8nrowqJXmZjY5&scene_id=home_feed&share_id=67129518449006201656427161207&time=1656427161207",
	       "https://focus.youth.cn/article/ws_eight?signature=DJ5qQLk6jVvNWEzxlO70m3Rwmfey2Goa0BGyPngp83Zm9KYreM&scene_id=home_feed&share_id=67129518446956511656427153088&time=1656427153088",
	       "https://focus.youth.cn/article/ws_eight?signature=bDm0KxOyWQGgYNjrBV4jEX8yziXOoMv1oLpzq253Av968kJPEM&scene_id=home_feed&share_id=67129518449008921656427144872&time=1656427144872",
	       "https://focus.youth.cn/article/ws_eight?signature=jEPYDGOJ685MLWwrbNaAVmnN0FWElzD1l3zVgQoedxKAkR20pB&scene_id=home_feed&share_id=67129518448960391656427136402&time=1656427136402",
	       "https://focus.youth.cn/article/ws_eight?signature=DJ5qQLk6jVvNWEzxlO70mOExbCey2Goa0BGyPngp83Zm9KYreM&scene_id=home_feed&share_id=67129518449063071656427127870&time=1656427127870",
	       "https://focus.youth.cn/s/as_one?signature=V5EWkpzrBZdXGYOlmQ4X0NRLVigzVRP4oK2nvbNxqe03PjJw9A&scene_id=home_feed&share_id=70907600472590831672672203775&time=1672672203775",
	       "https://focus.youth.cn/s/as_one?signature=bDjmABzyXE32GNxlOY4pZMyG8CxLlQAaZ9vnQ58wq06peMdkrP&scene_id=home_feed&share_id=70907600472633711672672244614&time=1672672244614",
	       "https://focus.youth.cn/s/as_one?signature=M3YJXEvNgO8W5zRwpk4V0PnKju5Gwgoa2mZ69xB0loAqGPQnLb&scene_id=home_feed&share_id=70907600470812851672672253942&time=1672672253942",
	       "https://focus.youth.cn/s/as_one?signature=vg9Vr5WAX3dJejlq6GaJpzROQimJQyr4woYk2PpNxbRZEDzmnL&scene_id=home_feed&share_id=70907600472560871672672263270&time=1672672263270",
	       "https://focus.youth.cn/s/as_one?signature=qEkWRmZyvzPO2bBdGX78O56BdHZrGlW4l36xneA0QpKgM9NYL8&scene_id=home_feed&share_id=70907600467293161672672273559&time=1672672273559",
	       "https://focus.youth.cn/article/ws_one?signature=G6vDYbegoP2Owr90x84KxAPnWFWOldM7jVBXQnmqNLEMRyzZ3l&scene_id=home_feed&share_id=67309351449007511656429075834&time=1656429075834",
	       "https://focus.youth.cn/s/as_one?signature=8ebgqKwdz5B3lN0vmO4GAN8bbtpO5KxaEZXnGLQox9rJAkWR2Y&scene_id=home_feed&share_id=70907600472627121672672232671&time=1672672232671",
	       "https://focus.youth.cn/article/ws_one?signature=bDm0KxOyWQGgYNjrBV4jEKDBzTX69Am1oLpzq253Av968kJPEM&scene_id=home_feed&share_id=67309351448113081656429177143&time=1656429177143",
	       "https://focus.youth.cn/article/ws_one?signature=EgVbkQOLMqvWm9RrG0a2nPd9rINOLr8a3xy6doZeXBJzln85PD&scene_id=home_feed&share_id=67309351423917341656429348262&time=1656429348262",
		"https://focus.youth.cn/s/fii7ew9h?signature=qEkWRmZyvzPO2bBdGX78OKdD3u32Omd4l36xneA0QpKgM9NYL8&scene_id=home_feed&share_id=71570978477812501676444591762&time=1676444591762",
		"https://focus.youth.cn/s/fii7ew9h?signature=8W62Rvorl9xBbN3dqEaxWKw3wTDjbvx7pjVLXQDk0GeygYZOJ5&scene_id=home_feed&share_id=71570978477645831676444581293&time=1676444581293",
		"https://focus.youth.cn/s/fii7ew9h?signature=zLbNjJ5wr0YegkWEG37oZY8ERTN8LK54DP6vqOn8lB2py9XRQx&scene_id=home_feed&share_id=71570978477750151676444570190&time=1676444570190",
		"https://focus.youth.cn/s/fii7ew9h?signature=NRxPz8j0mdBYbOGDW91lZ8Dp8SoAK537yAXV56qwogJEpkLK2e&scene_id=home_feed&share_id=71570978477758041676444560287&time=1676444560287",
		"https://focus.youth.cn/s/fii7ew9h?signature=l3Q0RNe9oPxVZ6pJMA7EoV6xdSdp5lG1L2XGkOKdvDynjYb5Wz&scene_id=home_feed&share_id=71570978476871371676444606496&time=1676444606496",
		"https://focus.youth.cn/s/xfyqy1i5?signature=Kb8LA9nmqlJRV56zE31y3xOrRi9nJxY7ZDNjYOMGgyPBWwreQ0&scene_id=home_feed&share_id=71618812478284511676881253369&time=1676881253369",
		"https://focus.youth.cn/s/xfyqy1i5?signature=NqylzJV6MGKj23RQPraW9Ld6RtZqDvp4EYOAgBndo9ZkDbepv5&scene_id=home_feed&share_id=71618812478370641676881263441&time=1676881263441",
		"https://focus.youth.cn/s/xfyqy1i5?signature=Kb8LA9nmqlJRV56zE31y3jpnnU9nJxY7ZDNjYOMGgyPBWwreQ0&scene_id=home_feed&share_id=71618812477350511676881244380&time=1676881244380",
		"https://focus.youth.cn/s/xfyqy1i5?signature=gbJynLeRd3VA29KYqE4g0ANxXSEz0237DNrGQloPXZzxvOB6jW&scene_id=home_feed&share_id=71618812478052261676881234640&time=1676881234640",
		"https://focus.youth.cn/s/xfyqy1i5?signature=bDjmABzyXE32GNxlOY4pZA5k5iGYNdJaZ9vnQ58wq06peMdkrP&scene_id=home_feed&share_id=71618812477301131676881224454&time=1676881224454",
	       "https://focus.youth.cn/article/ws_eight?signature=5NPeoJjl0pEAqLZYQM4qpQYjDuLogPK1692Vrk3gBdwXDyWK8b&scene_id=home_feed&share_id=67309351444245951656428592787&time=1656428592787"]
let encodearticles;


let headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Referer": "https://focus.youth.cn/",
    "Host": "script.baertt.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000231) NetType/WIFI Language/zh_CN",
    "Accept-Language": "zh-cn"
};

!(async() => {
    for (let i = 0; i < articles.length; i++) {
		encodearticles = encodeURIComponent(encodeURIComponent(articles[i]));
        nowTime = new Date().getTime();
        wxck = md5(nowTime);
        $.log(wxck);
		
        await storage();
        await $.wait(3000);

        await visit();
        await $.wait(3000);

        await openpage();
        await $.wait(3000);

        await callback();
        await $.wait(3000);

    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

function storage() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/storage?t=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp2`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function visit() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/visit?type=1&si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp3`;

        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function openpage() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/openpage?referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp5`;
        const request = {
            url: url,
            headers: headers,

        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function callback() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/callback?si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp6`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
             : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
            new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
            this.http = new s(this),
            this.data = null,
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.timeout : r;
                const[o, h] = i.split("@"),
                a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
