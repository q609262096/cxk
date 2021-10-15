const { randomInt } = require('crypto');



const $ = new Env('金手指阅读');
let jszhdArr = [
 {"Host":"apponlie.sahaj.cn","Proxy-Connection":"keep-alive","Accept":"application/json","Origin":"http://qasdd.sahaj.cn","User-Agent":" Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.1(0x1800012a) NetType/WIFI Language/zh_CN","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzYwOTI3Yi02N2I2LTQyZTctOGEwNC01MGYyMjQ2YzMyZTUiLCJpYXQiOjE2MzI1ODMyNDksImV4cCI6MTYzNTE3NTI0OX0.3ZHu-ETAkESJjPUsiIsyAoRSLlJdD_HO7pJFiNr8S7G7cF1-g0XAkTxfkJhxju_ghb8kTxBstp2DMny_OwT2fA","X-Requested-With":"com.tencent.mm","Referer":"http://qasdd.sahaj.cn/?code=071kIIll2foWP74pTtll2Cy4251kIIlG&openId=oiDdr52u9PyHLIGuPCmv-xo6nlrw","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"},
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5MTA2NTBlYy03MmMxLTRjMTEtYTlhOS03YWY0N2I5ZTZiNjYiLCJpYXQiOjE2MzI2NjgxMjEsImV4cCI6MTYzNTI2MDEyMX0.Z03j77o1CDj_q4ZAR11j0JJL22xLjrr0JyN-m0HtvsYUn1d5CmrLpQwmd-qI0fU7uTX5S6K0UNrqw38lLT91Iw"},
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYTYxYjFmZS1iNzFiLTRmNTktOTFiNC1lZThjNTMxZjdjNDUiLCJpYXQiOjE2MzI2NzE4NzAsImV4cCI6MTYzNTI2Mzg3MH0.nGFK6i-uISYs7XJ0cwU7Yaae3sCyB5ExCI7v2ckf1_4aThcs8Ma_txJyX8zVge5FCASb0w-xwSs0gsbfW1nfdA"},
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4M2IxNDU1Mi0zNTRhLTQ2MjItYjlhOS02N2EwZDllMTI3MTAiLCJpYXQiOjE2MzI2NzE3NjgsImV4cCI6MTYzNTI2Mzc2OH0.JUA9qWQF2Ky97BC01yB7wMC5HU-KO0pPA29OBvnzdG2zWZxBT1rf2y8Kif6AbAxOPL1CRQPgQ3WfEv_V6-iwgg"},
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwNzBjNTk3MC1lMTg2LTQwMWMtYjY2Zi02Y2UzOTI4NGIzNTciLCJpYXQiOjE2MzI2NzE0MzMsImV4cCI6MTYzNTI2MzQzM30.WB_mFDjQ4xdVSCBjK6aZSsO3vHyxCpTbEgcjSBu7cYWw5srVZbjua1piUZeuGW4N6Ij3Eg3JjeS7EDoY3PumgQ"},
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkOTJjY2QzNS0wYjAwLTQzMDUtYjI2Mi0yOWIyMDlkOGQ2ODEiLCJpYXQiOjE2MzI2NzA5NDEsImV4cCI6MTYzNTI2Mjk0MX0.6FWxjcP-SfBU8o2h50uFGKHhkdXwkiNsLwI0CUwmWZZ7d4E6ahK7xnpvUMUHe8RIc6UcFIixJWugWQa4C0DSRQ"},
{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwMzFmNDE1YS1hNTU5LTQzYzktOGQyNS0xMTdjM2RkNDBhYzkiLCJpYXQiOjE2MzI2NjkzNzcsImV4cCI6MTYzNTI2MTM3N30.ik5kJDv2ycmKN_UyaWKjQ_XClyBnBtPAp-5MUrNIzOG28YPzZ9Ep5PWoyg3uJRISRl4XYK9zpbEdozCxY3cYeg"},
{"Host":"apponlie.sahaj.cn","Proxy-Connection":"keep-alive","Accept":"application/json","Origin":"http://qasdd.sahaj.cn","User-Agent":"Mozilla/5.0 (Linux; Android 11; V2055A Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 XWEB/2899 MMWEBSDK/20210501 Mobile Safari/537.36 MMWEBID/8121 MicroMessenger/8.0.6.1900(0x28000635) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhNTA1NzQ2OS0yZDljLTQ1MjgtOWVlYi1iMDE5NWEwNzg3NjIiLCJpYXQiOjE2MzMzNTk1NjMsImV4cCI6MTYzNTk1MTU2M30.RTD4w2nBvaWt5u9bXrRfadMNXSvIv1QeHZEu591hCy-JE3YgN5cp--QOJB0uteq8Zrzt4dT4WVr4KhI0cbPt7w","X-Requested-With":"com.tencent.mm","Referer":"http://qasdd.sahaj.cn/?code=081a2Zkl2y8OR74iBxml2iKvND0a2Zk2&openId=oiDdr57MovjuOH_3wKbs_wBLCSVk","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"},
]

let theCurrentCount;//本次阅读次数
let theRandomCount;//本轮随机阅读次数


!(async () => {


  for (let k = 0; k < jszhdArr.length; k++) {
    
    jszhd = jszhdArr[k]
    $.index = k + 1;
    console.log(`\n开始【金手指阅读${$.index}】`)
    await myInfo()
    theCurrentCount=0;
    therandomCount=randomInt(10,20);
    await task()
    await $.wait(1000)
  }

}
)()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())



async function myInfo() {
  return new Promise((resolve) => {
    let plant6_url = {
      url: `http://apponlie.sahaj.cn/user/myInfo`,
      headers: jszhd,
    }
    $.get(plant6_url, async (error, response, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 0) {
          console.log(`【账户昵称】` + result.data.nameNick) 
          console.log(`【账户信用】` + result.data.credit)
          $.goldNow = result.data.goldNow
          console.log(`【账户余额】` + result.data.goldNow)
          num = $.goldNow / 4000 * 0.35

          $.log("【可提金额】" + num.toFixed(1))
        /*  if ($.goldNow >= 5000) {
            $.log("\n=====开始提现=====")
            txnum = $.goldNow / 4000 * 0.35
            txnum = txnum.toFixed(1)
            const CryptoJS = require('crypto-js')
            var key = CryptoJS.enc.Utf8.parse("5kosc7jy2w0fxx3s")
            var plaintText = `{"moneyPick":${txnum}}`
            var js = CryptoJS.AES.encrypt(plaintText, key, {
              mode: CryptoJS.mode.ECB,
              padding: CryptoJS.pad.Pkcs7
            })
            await $.wait(15000)
            await tx(js)
          }*/
        } else {
          console.log(`\n数据获取失败`)
        }
      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    })
  })
}

async function task() {
  return new Promise((resolve) => {
    let plant6_url = {
      url: `http://apponlie.sahaj.cn/task/fetchTask?taskType=1`,
      headers: jszhd,
    }
    $.get(plant6_url, async (error, response, data) => {
      try {
        const result = JSON.parse(data)

        if (result.code == 0) {
          taskId = result.data.taskId
          completeTodayCount = result.data.completeTodayCount
          completeTodayGold = result.data.completeTodayGold
          console.log(`\n【今日金币】${completeTodayGold}\n【阅读次数】${completeTodayCount}`)

          if (completeTodayCount >= 25) {
            await taskSeq(1)
          }
          if (completeTodayCount >= 70) {
            await taskSeq(2)
          }
          const CryptoJS = require('crypto-js')
          var key = CryptoJS.enc.Utf8.parse("5kosc7jy2w0fxx3s")
          var plaintText = `{"taskId":${taskId}}}`
          var js = CryptoJS.AES.encrypt(plaintText, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
          })
          if (taskId !== null) {
            await $.wait(21000)
            await completeTask(js)
          }
          if (taskId == null && result.data.bizCode == 30) {
            console.log('【阅读失败】获取任务失败，下批文章将在24小时后到来')
            await $.wait(1000)
           // console.log('【自主检测】开始执行自主检测')
           // await fetchSelfCheck()
          }
          if (taskId == null && result.data.bizCode == 11) {
            console.log('【阅读失败】获取任务失败，当天达到上限')
          }
          if (taskId == null && result.data.bizCode == 10) {
            console.log('【阅读失败】获取任务失败，下批文章将在60分钟后到达')
          }
        } else {
          console.log(`\n数据获取失败或者  今日阅读次数已满 请明天再来`)
        }

      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    })
  })
}

async function taskSeq(type) {
  return new Promise((resolve) => {
    let plant6_url = {
      url: `http://apponlie.sahaj.cn/sign/todayAwardGain?taskSeq=${type}`,
      headers: jszhd,
    }
    $.post(plant6_url, async (error, response, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 0) {
          console.log(`【任务奖励】任务${type}领取金币成功`)
        } else {
          console.log(`【任务奖励】今日任务${type}奖励已领取明日再来`)
        }
      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    })
  })
}



async function completeTask(body) {
  return new Promise((resolve) => {
    tk = jszhd
    token = tk.token
    let plant6_url = {
      url: `http://apponlie.sahaj.cn/task/completeTask`,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Host": "apponlie.sahaj.cn",
        "Origin": "http://qasdd.sahaj.cn",
        "Referer": "http://qasdd.sahaj.cn",
        "token": token,
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.8(0x18000825) NetType/4G Language/zh_CN"
      },
      body: `${body}`,
    }
    $.post(plant6_url, async (error, response, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 0) {
          console.log(`【阅读文章】阅读完成，获得金币：${result.data.goldAward}`)
          theCurrentCount++
          console.log(`【本轮阅读】${theCurrentCount}次`)
          console.log(`【本轮限制】${therandomCount}次`)
          if(theCurrentCount>therandomCount)
            return
          await $.wait(3000)
          await task()
        } else {
          console.log(`【阅读文章】阅读失败`)
          theCurrentCount++
          console.log(`【本轮阅读】${theCurrentCount}次`)
          console.log(`【本轮限制】${theRandomCount}次`)
        }
      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    })
  })
}




async function tx(body) {
  return new Promise((resolve) => {
    tk = jszhd
    token = tk.token

    let plant6_url = {
      url: `http://apponlie.sahaj.cn/user/pickAuto`,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Host": "apponlie.sahaj.cn",
        "Origin": "http://qasdd.sahaj.cn",
        "Referer": "http://qasdd.sahaj.cn",

        "token": token,
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.8(0x18000825) NetType/4G Language/zh_CN"
      },
      body: `${body}`,

    }
    $.post(plant6_url, async (error, response, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 0) {

          console.log(`\n=====提现成功=====`)


        } else {


          console.log(`\n数据获取失败`)


        }

      } catch (e) {
        $.logErr(e, response);
      } finally {
        resolve();
      }
    })
  })
}


function fetchSelfCheck() {
  return new Promise((resolve, reject) => {
    const url = "http://apponlie.sahaj.cn/check/fetchSelfCheck";
    const request = {
      url: url,
      headers: jszhd
    };

    $.get(request, async (error, response, data) => {
      try {
        const result = JSON.parse(data)
        if (result.code == 0) {
          taskId = result.data.taskId;
          const CryptoJS = require('crypto-js')
          var key = CryptoJS.enc.Utf8.parse("5kosc7jy2w0fxx3s")
          var plaintText = `{"taskId":${taskId}}}`
          var js = CryptoJS.AES.encrypt(plaintText, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
          })
          if (taskId !== null) {
            await $.wait(80000)
            await completeSelfCheck(js)
          }
        }
        else
        {
          console.log(`【自主检测】${result.msg}`)
        }
      } catch (e) {
        $.log(e)
      }
      resolve();
    })
  })
}


function completeSelfCheck(abody) {
  return new Promise((resolve, reject) => {
    token = jszhd.token
    const url = "http://apponlie.sahaj.cn/check/completeSelfCheck";
    const request = {
      url: url,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Host": "apponlie.sahaj.cn",
        "Origin": "http://qasdd.sahaj.cn",
        "Referer": "http://qasdd.sahaj.cn",
        "token": token,
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.8(0x18000825) NetType/4G Language/zh_CN"
      },
      body: `${abody}`,
    };

    $.post(request, async (error, response, data) => {
      try {
      } catch (e) {
        $.log(e)
      }
      resolve();
    })
  })
}







function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
