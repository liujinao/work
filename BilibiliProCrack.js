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
modifiedHeaders['Cookie'] = 'sid=pilun3mz; SESSDATA=0ceb0088%2C1723197108%2C27ef3221CjBz1kGh9d_ZVpiu7xWgfA5ChxmdNxhEuEi6LLUbjTtNRJXXyRa2NDdRUCvbge0fOokSVmRwTWRMREhQNWpUZEF4V3ZISFlMb1B2NzZqR1FZWWJXcmNqOWgzSnJEY25uZGR6UGs2TGxyWkxtMW1jWEp5cGJVdlJHVUVDcHFXYXFZWU1kMVZjN1ZRIIEC; bili_jct=b5409a9d5a161df91d169b0f7e5c0a77; DedeUserID=319619819; DedeUserID__ckMd5=cb83b9910b32ff93';
modifiedHeaders['x-bili-device-bin'] = 'CAEQpN+2IhokWTQ0NUJCNEEwNzc1N0U0QjQ1NzI4RjJCOUQ1ODI1QjkxRDA1IgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoRaVBob25lIDEzIFBybyBNYXhSBDE1LjBqBjcuMjIuMHJAMkQ4QUIzQTc2Qzc5MzI4QjhBMDExNzY4RTE3QTg4Q0UyMDIyMDQyMDE3NTczODBERTIwODVCRDlCQzFDMjI5RniYoqLwvTA=';
modifiedHeaders['Authorization'] = 'identify_v1 1ee67518a4cfb3bb89e9a427932da921CjBz1kGh9d_ZVpiu7xWgfA5ChxmdNxhEuEi6LLUbjTtNRJXXyRa2NDdRUCvbge0fOokSVjhEMkZWMV9BcGlSX2FFLUt2ZWE0LUFUX21CeVVmMmdxbW5meGdOTk5PVEZyUjdCLTA2QW9FWTRiaHVfX2hfR1FQNExDdHJRdlBiR2tjOFpCZ01EQ1JBIIEC';
modifiedHeaders['User-Agent'] = 'bili-universal/72200100 os/ios model/iPhone 13 Pro Max mobi_app/iphone osVer/15.0 network/2';
modifiedHeaders['buvid'] = 'Y445BB4A07757E4B45728F2B9D5825B91D05';
modifiedHeaders['x-bili-metadata-bin'] = 'CtwBMWVlNjc1MThhNGNmYjNiYjg5ZTlhNDI3OTMyZGE5MjFDakJ6MWtHaDlkX1pWcGl1N3hXZ2ZBNUNoeG1kTnhoRXVFaTZMTFVialR0TlJKWFh5UmEyTkRkUlVDdmJnZTBmT29rU1ZqaEVNa1pXTVY5QmNHbFNYMkZGTFV0MlpXRTBMVUZVWDIxQ2VWVm1NbWR4Ylc1bWVHZE9UazVQVkVaeVVqZENMVEEyUVc5RldUUmlhSFZmWDJoZlIxRlFORXhEZEhKUmRsQmlSMnRqT0ZwQ1owMUVRMUpCSUlFQxIGaXBob25lGgVwaG9uZSCk37YiKgVhcHBsZTIkWTQ0NUJCNEEwNzc1N0U0QjQ1NzI4RjJCOUQ1ODI1QjkxRDA1OgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'EgoKAnpoEgRIYW5z';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCGJlMmI4NWJk';
modifiedHeaders['x-bili-trace-id'] = 'd300222c42ac6649546a3f505265c898:546a3f505265c898:0:0';
$done({'headers': modifiedHeaders});