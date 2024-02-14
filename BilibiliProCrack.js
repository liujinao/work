/***********************************

> 应用名称：Bilibili大会员通用破解模板[墨鱼版]
> 软件版本：7.63.0
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 解锁说明：解锁VIP番剧和影视
> 更新时间：2024-01-14
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# ～ Bilibili大会员（2024-01-14）@ddgksf2013
^https?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player.*\.(v3|v2|v1).Play(URL|View|er).*$ url script-request-header BilibiliProCrack.js


[mitm] 

hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

***********************************/

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = 'Buvid=Y445BB4A07757E4B45728F2B9D5825B91D05; SESSDATA=b0c6366a%2C1723208799%2Cd25d3e22CjCBewasfudp00w7sFdWEP8RMEWAm9C6R8oXcfdW66ciNE_1Vb_eHUfID20nNjqdFr4SVkRWMHJaRXdlRUVETXd4azJHUmJOMzI3cjFrSUJFa214QnA0YnBLb2JIbDdBQXRxTE4yejlaeld5bWdNRUZLXzBaUl94Vm1zYkotMXlfOGhvRmVFSHh3IIEC; DedeUserID=319619819; DedeUserID__ckMd5=cb83b9910b32ff93; bili_jct=faa4f4645b4a3118b8e4d96dbd649f6c; sid=717oppb0; _uuid=2FBDEA89-84109-19C8-61EB-10C7D28F5789F42234infoc; b_nut=1707656842; buvid3=D812F210-DC08-2F3C-DD5F-219770CC3BB842474infoc; buvid4=0C36F89B-772A-30D9-FDDC-47620929ED1342474-124021113-vRB/itUAkcIzzZfVO2bEBA%3D%3D; buvid_fp=bbcf5a000d53e93a9a919887d01b2d4e';
modifiedHeaders['x-bili-device-bin'] = 'CAEQxP6wJBokWTQ0NUJCNEEwNzc1N0U0QjQ1NzI4RjJCOUQ1ODI1QjkxRDA1IgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoRaVBob25lIDEzIFBybyBNYXhSBDE1LjBqBjcuNjMuMHJAQjA0MkQ2ODE1MEJEOEQ1QzU3ODY2NjNERDdFQzVDOEQyMDE5MDgzMTEyNDIyNDdFN0RGMDM3QUQ0ODdCQjlBMHiYoqLwvTA=';
modifiedHeaders['Authorization'] = 'identify_v1 97205570ba5eed5a933b66510f424e22CjCBewasfudp00w7sFdWEP8RMEWAm9C6R8oXcfdW66ciNE_1Vb_eHUfID20nNjqdFr4SVkRWMHJaRXdlRUVETXd4azJHUmJOMzI3cjFrSUJFa214QnA0YnBLb2JIbDdBQXRxTE4yejlaeld5bWdNRUZLXzBaUl94Vm1zYkotMXlfOGhvRmVFSHh3IIEC';
modifiedHeaders['User-Agent'] = 'bili-universal/76300100 os/ios model/iPhone 13 Pro Max mobi_app/iphone osVer/15.0 network/2';
modifiedHeaders['buvid'] = 'Y445BB4A07757E4B45728F2B9D5825B91D05';
modifiedHeaders['x-bili-metadata-bin'] = 'CtwBOTcyMDU1NzBiYTVlZWQ1YTkzM2I2NjUxMGY0MjRlMjJDakNCZXdhc2Z1ZHAwMHc3c0ZkV0VQOFJNRVdBbTlDNlI4b1hjZmRXNjZjaU5FXzFWYl9lSFVmSUQyMG5OanFkRnI0U1ZrUldNSEphUlhkbFJVVkVUWGQ0YXpKSFVtSk9NekkzY2pGclNVSkZhMjE0UW5BMFluQkxiMkpJYkRkQlFYUnhURTR5ZWpsYWVsZDViV2ROUlVaTFh6QmFVbDk0Vm0xellrb3RNWGxmT0dodlJtVkZTSGgzSUlFQxIGaXBob25lGgVwaG9uZSDE/rAkKgVhcHBsZTIkWTQ0NUJCNEEwNzc1N0U0QjQ1NzI4RjJCOUQ1ODI1QjkxRDA1OgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'EgoKAnpoEgRIYW5z';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCDhmZTQ1ZGMx';
modifiedHeaders['x-bili-trace-id'] = 'e67c523656f48079604b4022b065cc57:604b4022b065cc57:0:0';
$done({'headers': modifiedHeaders});
