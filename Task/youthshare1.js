
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
et articles = ["https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamBbPkQfRoEyKIOqYeZB1nX3kY58KdmBzRO&uid=52684972&phone_code=96311c02ae444f6c5c392a48f27a399f&scid=36572880&time=1614696781&app_version=2.0.0&sign=d82a8ebab560424b427c56a4e6d7a707",
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7NEKwm5fYZKPMCvNJgAY4nMY6dljLxe9Opk&uid=52099957&phone_code=0d806eccf5bc3ab1605834a03e161fef&scid=36561301&time=1614697260&app_version=2.0.0&sign=09235942933ae4c8e6c807d4e7e90dfc",
"https://focus.youth.cn/article/s?signature=dQOvnJNrgR0GzE9azVdx8msQENeEcregmm5aV6yqY2lXojxeM8&uid=52104707&phone_code=387f2724b60ee013a9d4b3055bb5bb55&scid=36514755&time=1614694406&app_version=1.8.0&sign=0c42dce7ff9d62b00175eb808e748e83",
"https://focus.youth.cn/article/s?signature=P5zR0VlwdZoWp3N4KmgzOEINpxyATZB8ygjaMQLb6BeXxq2kEr&uid=52790136&phone_code=8517ad565762354fc686648b938676e8&scid=36539910&time=1614697439&app_version=2.0.0&sign=2e029ce209cf0cd729e173cd4c4e17cd",
"https://focus.youth.cn/article/s?signature=BzyAgkjdGMQWRVY75DEQjxcxZAqKfvJZADY4lK9opXE8ZO3mrb&uid=52684972&phone_code=96311c02ae444f6c5c392a48f27a399f&scid=36551911&time=1614696793&app_version=2.0.0&sign=6098716ff13049a8b65c81ee77340ad4",
"https://focus.youth.cn/article/s?signature=0Z3Jgv96wqmVPeM7o9KlREFMZJemix62v2o1jpGDnANbo8KXQr&uid=52111825&phone_code=5fae7ff873c98559d2b11224a59c31ec&scid=36551291&time=1614699112&app_version=2.0.0&sign=ea1fcc9b3f23ff72deb711bdec81724b",
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946PLGk0umvyxpHkB9mDjavNyb8EMlgYnm6k&uid=52684912&phone_code=0ab4be0ed4b624fedce14a8297fabc33&scid=36551807&time=1614699599&app_version=2.0.2&sign=a7e504f2aa6fbb5d5451ccb6f9ca0350",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q8d8b0T8WEQ5sNv9wOz1rny295VAlmPWzY&uid=52684972&phone_code=96311c02ae444f6c5c392a48f27a399f&scid=36562921&time=1614696801&app_version=2.0.0&sign=8aaff1ea8a24ed28119c638b9101bd06",
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAyzR5PhzlBw0FXlzbG9awr9G5ZDV6ldJ2N&uid=52684972&phone_code=96311c02ae444f6c5c392a48f27a399f&scid=36554928&time=1614696809&app_version=2.0.0&sign=ec97e3a43452f42d105fd5713681c269",
"https://focus.youth.cn/article/s?signature=yGdoJZx2eAwpjgl7OLjVvPSZW8jRcgRAz3na0PMbqvLnr9EKzR&uid=52684912&phone_code=0ab4be0ed4b624fedce14a8297fabc33&scid=36551146&time=1614699638&app_version=2.0.2&sign=f2b00f316efe7920c347ae340f78997d",
"https://focus.youth.cn/article/s?signature=eQVjADm2pM09d8g4XjxrWmUoKr2XhAEKrJYalyGPYqnLbZRBXK&uid=52684972&phone_code=96311c02ae444f6c5c392a48f27a399f&scid=36558282&time=1614696818&app_version=2.0.0&sign=babf2353f0e11681ce6f0bbfad044124",
"https://focus.youth.cn/article/s?signature=ML5JYgKNrewq9QO4gMA6LgFY6RO6Tenv9vmayGDn2Z0PAvkopB&uid=52104707&phone_code=387f2724b60ee013a9d4b3055bb5bb55&scid=36552312&time=1614697184&app_version=1.8.0&sign=5a343d5efae24877c3cbea5e9c59e8b1",
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946PLjvnCWLdkJskB9LEzavNyb8EMlgYnm6k&uid=52099957&phone_code=0d806eccf5bc3ab1605834a03e161fef&scid=36555279&time=1614695494&app_version=2.0.0&sign=f282777b8b14394feea50bc978d4262e",
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDjQygmtmYo60i05nKnv4K5N3rYk6pmxVGl&uid=52111825&phone_code=5fae7ff873c98559d2b11224a59c31ec&scid=36556962&time=1614699129&app_version=2.0.0&sign=b8cc3ba4d3a47d16e05c26a08f367958",
"https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946PLOv8HmvyxpHkB9mjOavNyb8EMlgYnm6k&uid=52684912&phone_code=0ab4be0ed4b624fedce14a8297fabc33&scid=36551386&time=1614699651&app_version=2.0.2&sign=99e544ab5f641580a164bd64078bcca7",
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YwqkXJTMZEYnUVdZnOQ1L3yAP6WMnmlGK9&uid=52790136&phone_code=8517ad565762354fc686648b938676e8&scid=36565504&time=1614697421&app_version=2.0.0&sign=5d8fcad4046b52c52ecb99fa3e0b92d1",
"https://focus.youth.cn/article/s?signature=k5Bv92bmMjwJEOP782KXdLu5LAxPszQgNgD1gxne6rYKdpWVoR&uid=52111825&phone_code=5fae7ff873c98559d2b11224a59c31ec&scid=36514755&time=1614699140&app_version=2.0.0&sign=eb66e07c287320db9d32747af4b7d512",
"https://focus.youth.cn/article/s?signature=k5Bv92bmMjwJEOP782q2LEcYXRQlUzQgARr1gxne6rYKdpWVoR&uid=52790136&phone_code=8517ad565762354fc686648b938676e8&scid=36562921&time=1614697401&app_version=2.0.0&sign=2fdb34ac145ac4436cc8af0d4b443b9c",
"https://focus.youth.cn/article/s?signature=8MzJgNdEKAO0xvq7nRpWyxS0B8mDc50VQvq7ZPYQ3lm9pbD2yn&uid=52099957&phone_code=0d806eccf5bc3ab1605834a03e161fef&scid=36552974&time=1614695486&app_version=2.0.0&sign=badd267a652b217515ecdf0a311fb287",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4v8n8L3HLEzYEiMyjzRNa8B9yl0Z2eRAmzr&uid=52104707&phone_code=387f2724b60ee013a9d4b3055bb5bb55&scid=36562692&time=1614694388&app_version=1.8.0&sign=46c6692821275a5241c4d058736353b7",
"https://focus.youth.cn/article/s?signature=3nLo8BVlwPd52WM792B2EPt0n8k5Tmdrbrea9Ee0q6OyNbJvDX&uid=52111825&phone_code=5fae7ff873c98559d2b11224a59c31ec&scid=36562692&time=1614699120&app_version=2.0.0&sign=e1af8e837a71747f3ccd68478269dc07",
"https://focus.youth.cn/article/s?signature=Wn8Pym36L9l0Yoz1yVjNXdHR0kE0hYNPbbr4xKXjQqgZBMVdDe&uid=52104707&phone_code=387f2724b60ee013a9d4b3055bb5bb55&scid=36531608&time=1614694415&app_version=1.8.0&sign=1698890d4c1cb727f067f1f81034bd9d",
"https://focus.youth.cn/article/s?signature=lbgJRpz0We53NxQ4Qq5MDAFDBK3OIx0MzAq4koMEv6nydKPZLD&uid=52099957&phone_code=0d806eccf5bc3ab1605834a03e161fef&scid=36558055&time=1614695477&app_version=2.0.0&sign=be97ac35bccfbbc389c6866c626cf8c4",
"https://focus.youth.cn/article/s?signature=QB5EzPY3exK9wOd7E9YJAphVkBykTgGXwXY78oADjvkbgZRGLV&uid=52104707&phone_code=387f2724b60ee013a9d4b3055bb5bb55&scid=36565504&time=1614697199&app_version=1.8.0&sign=df39a83e7dcde80247a564e4dd5846e5",
"https://focus.youth.cn/article/s?signature=3YDwkj8dqQbPnoB4jLwM3DSMlbKgU3A2PjYalgxXL9AJ2zORKM&uid=52790136&phone_code=8517ad565762354fc686648b938676e8&scid=36409738&time=1614697455&app_version=2.0.0&sign=1a7448dcee90fa11bd63c2c0a33cab66",
"https://focus.youth.cn/article/s?signature=Wn8Pym36L9l0Yoz1yVx9BLSR0VzvFYNPGA34xKXjQqgZBMVdDe&uid=52099957&phone_code=0d806eccf5bc3ab1605834a03e161fef&scid=36564644&time=1614697122&app_version=2.0.0&sign=f828e1512f08382039901aa62554ae43",
"https://focus.youth.cn/article/s?signature=QB5EzPY3exK9wOd7E9YGOlFJ38NDfgGXw9R78oADjvkbgZRGLV&uid=52790136&phone_code=8517ad565762354fc686648b938676e8&scid=36572880&time=1614697373&app_version=2.0.0&sign=adc88e0a4bb7fbed3b86925c426cd8f1",
"https://focus.youth.cn/article/s?signature=yjOAEqLWPoZQngMaDjQR26tmYo60i05nK5l4K5N3rYk6pmxVGl&uid=52111825&phone_code=5fae7ff873c98559d2b11224a59c31ec&scid=36552312&time=1614699091&app_version=2.0.0&sign=e2dea531ff947cf961c59685bff1c88f",
"https://focus.youth.cn/article/s?signature=6jEkyrXeG8nBYgKaxVKElvswPv5RtKZMmgB4DwldQJz0L2RON3&uid=52684912&phone_code=0ab4be0ed4b624fedce14a8297fabc33&scid=36514755&time=1614699670&app_version=2.0.2&sign=d71ebc77957064fe1967c05472e3a7b0",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4v8n8L3HV908PuMyjXeKa8B9yl0Z2eRAmzr&uid=52684912&phone_code=0ab4be0ed4b624fedce14a8297fabc33&scid=36562692&time=1614699661&app_version=2.0.2&sign=0c9758dfa6902cdfca4476e553bf8c29",]
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
