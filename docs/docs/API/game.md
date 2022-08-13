游戏管理接口 `Game`
==========================================================================================

在使用游戏接口前需先创建游戏管理对象，方法如下：(此处已废弃)

```lua
local Game = class.Game.new()

```

**具体函数名及描述如下:**

| 序号 | 函数名 | 函数描述 |
| :---: | :---: | :---: |
| 1 | [doGameEnd(...)](#dogameend) | 结束比赛 |
| 2 | [getDefString(...)](#getdefstring) | 获取默认字符串 |
| 3 | [setScriptVar(...)](#setscriptvar) | 设置脚本参数，供自定义使用 |
| 4 | [getScriptVar(...)](#getscriptvar) | 获取脚本参数，自定义使用 |
| 5 | [sendScriptVars2Client(...)](#sendscriptvars2client) | 上传设置好的脚本参数 |
| 6 | [addRenderGlobalEffect(...)](#addrenderglobaleffect) | 新增全局效果 |
| 7 | [removeRenderGlobalEffect(...)](#removerenderglobaleffect) | 移除全局效果 |
| 8 | [setRenderGlobalEffectPos(...)](#setrenderglobaleffectpos) | 设置全局效果位置 |
| 9 | [setRenderGlobalEffectScale(...)](#setrenderglobaleffectscale) | 设置全局效果缩放 |
| 10 | [msgBox(...)](#msgbox) | 设置弹框提示 |

doGameEnd
------------------------------------

*   参数及类型：`nil`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：结束比赛
*   具体使用案例如下：

```lua
--每当玩家做动画表情，就会游戏结束
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--结束游戏
    Game:doGameEnd(nil)
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

getDefString
------------------------------------------

*   参数及类型：
    *   id:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   ret:[**`string`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：获取默认字符串
*   具体使用案例如下：

```lua
--获取id为1的默认字符串，参数1为默认字符串id(不建议使用此接口)
local result,str=Game:getDefString(1)
--在聊天框显示
Chat:sendSystemMsg("id为1的默认字符串内容为："..str)

```

setScriptVar
------------------------------------------

*   参数及类型：
    *   index:[**`number`**](/docs/API/global.md#Lua原生数据类型)从1开始索引
    *   val:[**`number`**](/docs/API/global.md#Lua原生数据类型)自定义的值
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：设置脚本参数，供自定义使用
*   具体使用案例如下：

```lua
local result = Game:setScriptVar(index, val)

```

getScriptVar
------------------------------------------

*   参数及类型：
    *   index:[**`number`**](/docs/API/global.md#Lua原生数据类型)从1开始索引
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   val:[**`number`**](/docs/API/global.md#Lua原生数据类型)自定义的值
*   该方法的主要作用：获取脚本参数，自定义使用
*   具体使用案例如下：

```lua
local result = Game:getScriptVar(index)

```

sendScriptVars2Client
------------------------------------------------------------

*   参数及类型：`nil`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：上传设置好的脚本参数
*   具体使用案例如下：

```lua
local result = Game:sendScriptVars2Client()

```

addRenderGlobalEffect
------------------------------------------------------------

*   参数及类型：
    *   path:[**`string`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   effectid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：新增全局效果
*   具体使用案例如下：

```lua
--在游戏添加一个迷雾特效，目前参数只支持一个"particles/Fog.ent"
local result,effectid=Game:addRenderGlobalEffect("particles/Fog.ent")
--在聊天框显示
Chat:sendSystemMsg("添加了一个迷雾效果！id为"..effectid)

```

removeRenderGlobalEffect
------------------------------------------------------------------

*   参数及类型：
    *   effectid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：移除全局效果
*   具体使用案例如下：

```lua
--移除id为1的地图特效，参数1为要移除的特效id
Game:removeRenderGlobalEffect(1)
--在聊天框显示
Chat:sendSystemMsg("移除了id为1的地图特效")

```

setRenderGlobalEffectPos
------------------------------------------------------------------

*   参数及类型：
    *   effectid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
    *   x,y,z:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：设置全局效果位置
*   具体使用案例如下：

```lua
--把id为1的地图特效移动至(10,10)高度7
--第一个参数为特效id
--后三个参数为移动至坐标
Game:setRenderGlobalEffectPos(1,10,7,10)
--在聊天框显示
Chat:sendSystemMsg("把id为1的特效移动到了坐标(0,0)高度7的位置")

```

setRenderGlobalEffectScale
----------------------------------------------------------------------

*   参数及类型：
    *   effectid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
    *   scalex,scaley,scalez:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：设置全局效果缩放
*   具体使用案例如下：

```lua
--把id为1的地图特效放大两倍
--第一个参数为需要缩放的特效id
--后三个参数分别为特效在x、y、z方向上的缩放倍数
Game:setRenderGlobalEffectScale(1,2,2,2)
--在聊天框显示
Chat:sendSystemMsg("把id为1的特效放大了2倍")

```

msgBox
------------------------------

*   参数及类型：
    *   msg:[**`string`**](/docs/API/global.md#Lua原生数据类型)要显示的信息
*   返回值及类型：
*   该方法的主要作用：设置弹框提示
*   具体使用案例如下：

```lua
--每当玩家做动画表情，显示一个弹窗
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--显示一个游戏弹窗，参数为弹窗显示内容
    Game:msgBox("这是一个弹窗！")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```
