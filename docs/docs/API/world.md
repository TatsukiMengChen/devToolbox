世界管理接口 `World`
==========================================================================

在使用世界接口前需先创建世界管理对象，方法如下：(此处已废弃)

```lua
local World = class.World.new()

```

**具体函数名及描述如下:**

| 序号 | 函数名 | 函数描述 |
| :---: | :---: | :---: |
| 1 | [isDaytime(...)](#isdaytime) | 是否是白天 |
| 2 | [isCustomGame(...)](#iscustomgame) | 是否是自定义游戏 |
| 3 | [isCreativeMode(...)](#iscreativemode) | 是否是创造模式 |
| 4 | [isGodMode(...)](#isgodmode) | 多人创造模式 或者 自制玩法的编辑模式 |
| 5 | [isExtremityMode(...)](#isextremitymode) | 极限模式 |
| 6 | [isFreeMode(...)](#isfreemode) | 冒险模式之自由模式 |
| 7 | [isSurviveMode(...)](#issurvivemode) | 单人模式 或者 冒险模式之自由模式 |
| 8 | [isCreateRunMode(...)](#iscreaterunmode) | 由创造模式转的生存 |
| 9 | [isGameMakerMode(...)](#isgamemakermode) | 自制玩法的编辑模式 |
| 10 | [isGameMakerRunMode(...)](#isgamemakerrunmode) | 自制玩法的运行模式 |
| 11 | [getHours(...)](#gethours) | 获取游戏当前时间(h) |
| 12 | [setHours(...)](#sethours) | 设置游戏当前时间(h) |
| 13 | [getCameraEditState(...)](#getcameraeditstate) | 获取视角编辑状态 |
| 14 | [setCameraEditState(...)](#setcameraeditstate) | 设置视角编辑状态 |
| 15 | [getCustomCameraConfig(...)](#getcustomcameraconfig) | 获取自定义相机配置 |
| 16 | [getRangeXZ(...)](#getrangexz) | 获取区块(chunk)范围，返回区块始末位置 |
| 17 | [getRayLength(...)](#getraylength) | 计算指定方向射线长度(遇到方块结束) |
| 18 | [getRayBlock(...)](#getrayblock) | 射线打到的方块类型(遇到方块结束) |
| 19 | [getActorsByBox(...)](#getactorsbybox) | 获取范围内actor,type参考OBJ\_TYPE，0表示范围内全部的actor, 返回数量和objid数组 |
| 20 | [getPlayerTotal(...)](#getplayertotal) | 获取全部玩家数量，默认全部玩家 |
| 21 | [getAllPlayers(...)](#getallplayers) | 获取全部玩家,可限制存活情况(0表示存活，1表示阵亡)，默认全部玩家 |
| 22 | [randomOnePlayer(...)](#randomoneplayer) | 随机获取一名玩家 |
| 23 | [despawnActor(...)](#despawnactor) | 移除actor |
| 24 | [spawnCreature(...)](#spawncreature) | 生成生物(包括怪物、NPC、动物等) |
| 25 | [despawnCreature(...)](#despawncreature) | 移除生物 |
| 26 | [spawnItem(...)](#spawnitem) | 在指定位置生成道具 |
| 27 | [despawnItemByBox(...)](#despawnitembybox) | 移除道具(通过区域) |
| 28 | [despawnItemByObjid(...)](#despawnitembyobjid) | 移除道具(通过ID) |
| 29 | [spawnProjectile(...)](#spawnprojectile) | 生成投掷物 |
| 30 | [spawnProjectileByDir(...)](#spawnprojectilebydir) | 生成投掷物(通过方向) |
| 31 | [calcDistance(...)](#calcdistance) | 计算位置之间的距离 |
| 32 | [playParticalEffect(...)](#playparticaleffect) | 在指定位置播放特效 1.2+ |
| 33 | [stopEffectOnPosition(...)](#stopeffectonposition) | 停止指定位置的特效 1.2+ |
| 34 | [setEffectScaleOnPosition(...)](#seteffectscaleonposition) | 设置指定位置的特效大小 1.2+ |
| 35 | [randomParticleEffectID(...)](#randomparticleeffectid) | 随机特效类型，随机返回一种特效ID 1.2+ |
| 36 | [playSoundEffectOnPos(...)](#playsoundeffectonpos) | 在指定位置上播放指定音效 1.3+ |
| 37 | [stopSoundEffectOnPos(...)](#stopsoundeffectonpos) | 停止指定位置上的指定音效 1.3+ |
| 38 | [getLightByPos(...)](#getlightbypos) | 获取光照强度 1.7+ |
| 39 | [setBlockLightEx(...)](#setblocklightex) | 设置光照强度 1.7+ |
| 40 | [randomSoundID(...)](#randomSoundID) | 随机出来的音乐ID 1.9+ |
| 41 | [randomWeatherID(...)](#randomWeatherID) | 随机出来的天气ID 1.9+ |

isDaytime
------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`boolean`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：是否是白天
*   具体使用案例如下：

```lua
--判断现在是不是白天
local result=World:isDaytime()
if result==0 then--如果是白天
	Chat:sendSystemMsg("现在是白天！")
else--如果不是白天
	Chat:sendSystemMsg("现在是晚上！")
end

```

isCustomGame
------------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`boolean`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：是否是自定义游戏
*   具体使用案例如下：

```lua
--判断是不是自定义游戏
local result=World:isCustomGame()
if result==0 then--如果是自定义
	Chat:sendSystemMsg("当前是自定义游戏！")
else--如果不是自定义
	Chat:sendSystemMsg("当前不是自定义游戏！")
end

```

isCreativeMode
----------------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`boolean`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：是否是创造模式
*   具体使用案例如下：

```lua
--判断是不是创造模式
local result=World:isCreativeMode()
if result==0 then--如果是创造模式
	Chat:sendSystemMsg("当前是创造模式！")
else--如果不是创造模式
	Chat:sendSystemMsg("当前不是创造模式！")
end

```

isGodMode
------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`boolean`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：多人创造模式 或者 自制玩法的编辑模式
*   具体使用案例如下：

```lua
--判断是不是多人创造模式或者玩法编辑模式
local result=World:isGodMode()
if result==0 then--如果是多人创造或者玩法编辑
	Chat:sendSystemMsg("当前是多人创造或玩法编辑模式！")
else--如果不是
	Chat:sendSystemMsg("当前不是多人创造或玩法编辑模式！")
end

```

isExtremityMode
------------------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`boolean`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：极限模式
*   具体使用案例如下：

```lua
--判断是不是极限模式
local result=World:isExtremityMode()
if result==0 then--如果是极限模式
	Chat:sendSystemMsg("当前是极限模式！")
else--如果不是极限模式
	Chat:sendSystemMsg("当前不是极限模式！")
end

```

isFreeMode
--------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`boolean`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：冒险模式之自由模式
*   具体使用案例如下：

```lua
--判断是不是冒险自由模式
local result=World:isFreeMode()
if result==0 then--如果是冒险自由模式
	Chat:sendSystemMsg("当前是冒险自由模式！")
else--如果不是
	Chat:sendSystemMsg("当前不是冒险自由模式！")
end

```

isSurviveMode
--------------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`boolean`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：单人模式 或者 冒险模式之自由模式
*   具体使用案例如下：

```lua
--判断是不是单人生存模式
local result=World:isSurviveMode()
if result==0 then--如果是单人生存模式
	Chat:sendSystemMsg("当前是单人生存模式！")
else--如果不是单人生存模式
	Chat:sendSystemMsg("当前不是单人生存模式！")
end

```

isCreateRunMode
------------------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`boolean`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：由创造模式转的生存
*   具体使用案例如下：

```lua
--判断是不是创造转生存模式
local result=World:isCreateRunMode()
if result==0 then--如果是创造转生存模式
	Chat:sendSystemMsg("当前是创造转生存模式！")
else--如果不是创造转生存模式
	Chat:sendSystemMsg("当前不是创造转生存模式！")
end

```

isGameMakerMode
------------------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`boolean`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：自制玩法的编辑模式
*   具体使用案例如下：

```lua
--判断是不是玩法编辑模式
local result=World:isGameMakerMode()
if result==0 then--如果是玩法编辑模式
	Chat:sendSystemMsg("当前是玩法编辑模式！")
else--如果不是玩法编辑模式
	Chat:sendSystemMsg("当前不是玩法编辑模式！")
end

```

isGameMakerRunMode
------------------------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`boolean`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：自制玩法的运行模式
*   具体使用案例如下：

```lua
--判断是不是玩法运行模式
local result=World:isGameMakerRunMode()
if result==0 then--如果是玩法运行模式
	Chat:sendSystemMsg("当前是玩法运行模式！")
else--如果不是玩法运行模式
	Chat:sendSystemMsg("当前不是玩法运行模式！")
end

```

getHours
----------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：获取游戏当前时间(h)
*   具体使用案例如下：

```lua
--获取当前时间
local result,time=World:getHours()
--在聊天框显示
Chat:sendSystemMsg("现在是"..time.."点！")

```

setHours
----------------------------------

*   参数及类型：
    *   hour:[**`int`**](/docs/API/global.md#Lua原生数据类型)小时时间
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：设置游戏当前时间(h)
*   具体使用案例如下：

```lua
--设置时间为8点
World:setHours(8)
--在聊天框显示
Chat:sendSystemMsg("时间设置为8点！")

```

getCameraEditState
------------------------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   state:[**`number`**](/docs/API/global.md#Lua原生数据类型)0默认，1编辑状态，2测试状态
*   该方法的主要作用：获取视角编辑状态
*   具体使用案例如下：

```lua
--获取当前视角编辑状态
local result,state=World:getCameraEditState()
if state==0 then--0:默认
	Chat:sendSystemMsg("当前视角编辑状态为:默认")
elseif state==1 then--1:编辑中
	Chat:sendSystemMsg("当前视角编辑状态为:编辑中")
elseif state==2 then--2:测试中
	Chat:sendSystemMsg("当前视角编辑状态为:测试中")
end

```

setCameraEditState
------------------------------------------------------

*   参数及类型：
    *   state:[**`CameraEditState`**](/docs/API/global.md#自定义视角编辑状态)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：设置视角编辑状态
*   具体使用案例如下：

```lua
local result = World:setCameraEditState(state)

```

getCustomCameraConfig
------------------------------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   config:[**`CameraEditState`**](/docs/API/global.md#自定义视角编辑状态)
*   该方法的主要作用：获取自定义相机配置
*   具体使用案例如下：

```lua
local result = World:getCustomCameraConfig()

```

getRangeXZ
--------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   startX,startZ,endX,endZ:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：获取区块(chunk)范围，返回区块始末位置
*   具体使用案例如下：

```lua
--获取区块范围
local result,startX,startZ,endX,endZ=World:getRangeXZ()
Chat:sendSystemMsg("区块起点横坐标："..startX)
Chat:sendSystemMsg("区块起点纵坐标："..startZ)
Chat:sendSystemMsg("区块终点横坐标："..endX)
Chat:sendSystemMsg("区块终点纵坐标："..endZ)

```

getRayLength
------------------------------------------

*   参数及类型：
    *   srcx,srcy,srcz:[**`number`**](/docs/API/global.md#Lua原生数据类型)起始点坐标
    *   dstx,dsty,dstz:[**`number`**](/docs/API/global.md#Lua原生数据类型)终点坐标
    *   distance:[**`number`**](/docs/API/global.md#Lua原生数据类型)预测的最大距离
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   length:[**`number`**](/docs/API/global.md#Lua原生数据类型)两点间的长度
*   该方法的主要作用：计算指定方向射线长度(遇到方块结束)
*   具体使用案例如下：

```lua
local result = World:getRayLength(srcx, srcy, srcz, dstx, dsty, dstz, distance)

```

getRayBlock
----------------------------------------

*   参数及类型：
    *   srcx,srcy,srcz:[**`number`**](/docs/API/global.md#Lua原生数据类型)起始点
    *   face:[**`number`**](/docs/API/global.md#Lua原生数据类型)
    *   distance:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   blockid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：射线打到的方块类型(遇到方块结束)
*   具体使用案例如下：

```lua
--获取从(0,0)高度10开始，向北50格内碰到的第一个方块id
--方向参数：0西 1东 2南 3北 4下 5上
local result,blockid=World:getRayBlock(0,10,0,3,50)
if id==-1 then--如果50格内没有方块
	Chat:sendSystemMsg("从(0,0)高度10开始，向北50格没有方块")
else--如果50格内有方块
	Chat:sendSystemMsg("从(0,0)高度10开始，向北50格第一个方块id是"..blockid)
end

```

getActorsByBox
----------------------------------------------

*   参数及类型：
    *   objtype:[**`number`**](/docs/API/global.md#Lua原生数据类型)指定类型
    *   x1,y1,z1:[**`number`**](/docs/API/global.md#Lua原生数据类型)起始位置
    *   x2,y2,z2:[**`number`**](/docs/API/global.md#Lua原生数据类型)最终位置
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   num:[**`number`**](/docs/API/global.md#Lua原生数据类型)
    *   objids:[**`table`**](/docs/API/global.md#Lua原生数据类型)objid数组
*   该方法的主要作用：获取范围内actor,type参考OBJ\_TYPE，0表示范围内全部的actor, 返回数量和objid数组
*   具体使用案例如下：

```lua
--参数：
local objtype=1--类型参数：0全部 1玩家 2生物 3掉落物 4投掷物
local x1,y1,z1=0,7,0--区域起点坐标
local x2,y2,z2=50,57,50--区域终点坐标
--获取(x0,z0)高度y0到(x1,z1)高度y1范围内，类型为type的物品数量与列表
local result,num,objids=World:getActorsByBox(objtype,x1,y1,z1,x2,y2,z2)
--在聊天框显示数量
Chat:sendSystemMsg("在范围内一共有"..num.."个玩家")
--在聊天框显示列表
for i,a in ipairs(objids) do
	Chat:sendSystemMsg("第"..i.."个:"..a)
end

```

getPlayerTotal
----------------------------------------------

*   参数及类型：
    *   alive:[**`number`**](/docs/API/global.md#Lua原生数据类型)0表示阵亡，1表示存活，默认-1表示全体玩家
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   num:[**`number`**](/docs/API/global.md#Lua原生数据类型)数量
*   该方法的主要作用：获取全部玩家数量，默认全部玩家
*   具体使用案例如下：

```lua
--获取当前存档玩家总数
local result,num=World:getPlayerTotal(-1)
Chat:sendSystemMsg("当前存档玩家总数为："..num)
--获取当前存档阵亡玩家数
result,num=World:getPlayerTotal(0)
Chat:sendSystemMsg("当前存档阵亡玩家数为："..num)
--获取当前存档存活玩家数
result,num=World:getPlayerTotal(1)
Chat:sendSystemMsg("当前存档存活玩家数为："..num)

```

getAllPlayers
--------------------------------------------

*   参数及类型：
    *   alive:[**`number`**](/docs/API/global.md#Lua原生数据类型)0表示阵亡，1表示存活，默认-1表示全体玩家
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   num:[**`number`**](/docs/API/global.md#Lua原生数据类型)数量
    *   array:[**`table`**](/docs/API/global.md#Lua原生数据类型)玩家ID数组
*   该方法的主要作用：获取全部玩家,可限制存活情况(0表示存活，1表示阵亡)，默认全部玩家
*   具体使用案例如下：

```lua
--获取当前存档全部玩家列表
--参数：-1全部玩家 0阵亡玩家 1存活玩家
local result,num,array=World:getAllPlayers(-1)
--在聊天框显示数量
Chat:sendSystemMsg("当前存档一共有"..num.."个玩家")
--在聊天框显示列表
for i,a in ipairs(array) do
	Chat:sendSystemMsg("第"..i.."个:"..a)
end

```

randomOnePlayer
------------------------------------------------

*   参数及类型：
    *   alive:[**`number`**](/docs/API/global.md#Lua原生数据类型)0表示阵亡，1表示存活，默认-1表示全体玩家
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   playerid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：随机获取一名玩家
*   具体使用案例如下：

```lua
--从全部玩家中随机选取一名玩家
--参数：-1全部玩家 0阵亡玩家 1存活玩家
local result,playerid=World:randomOnePlayer(-1)
--在聊天框显示
Chat:sendSystemMsg("随机选取了一名玩家："..playerid)

```

despawnActor
------------------------------------------

*   参数及类型：
    *   objid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：移除actor
*   具体使用案例如下：

```lua
--参数：
local type=2--类型参数：1玩家 2生物 3掉落物 4投掷物
local x0,y0,z0=0,7,0--区域起点坐标
local x1,y1,z1=50,57,50--区域终点坐标
--获取(x0,z0)高度y0到(x1,z1)高度y1范围内，类型为type的物品数量与列表
local result,n,actors=World:getActorsByBox(type,x0,y0,z0,x1,y1,z1)
if n>0 then--如果范围内生物数量大于0
	--移除其中一个生物
	World:despawnActor(actors[1])
	--在聊天框显示
	Chat:sendSystemMsg("移除了"..actors[1])
else--如果范围内没有生物
	--在聊天框显示
	Chat:sendSystemMsg("(0,7,0)至(50,57,50)范围内没有生物")
end

```

spawnCreature
--------------------------------------------

*   参数及类型：
    *   x,y,z:[**`number`**](/docs/API/global.md#Lua原生数据类型)
    *   actorid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
    *   num:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   objids:[**`table`**](/docs/API/global.md#Lua原生数据类型)objid数组
*   该方法的主要作用：生成生物(包括怪物、NPC、动物等)
*   具体使用案例如下：

```lua
--在(0,0)高度7的位置生成3只鸡
--前三个参数0,7,0是生成坐标
--第四个参数3400是生成的生物id
--最后一个参数3是生成的数量
local result,objids=World:spawnCreature(0,7,0,3400,3)
--在聊天框显示提示
Chat:sendSystemMsg("在(0,0)高度7的位置生成了3只鸡，它们在存档中的id分别是：")
--在聊天框显示id列表
for i=1,#objids do
	Chat:sendSystemMsg(objids[i])
end

```

despawnCreature
------------------------------------------------

*   参数及类型：
    *   objid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：移除生物
*   具体使用案例如下：

```lua
--参数：
local type=2--类型参数：1玩家 2生物 3掉落物 4投掷物
local x0,y0,z0=0,7,0--区域起点坐标
local x1,y1,z1=50,57,50--区域终点坐标
--获取(x0,z0)高度y0到(x1,z1)高度y1范围内，类型为type的物品数量与列表
local result,n,actors=World:getActorsByBox(type,x0,y0,z0,x1,y1,z1)
if n>0 then--如果范围内生物数量大于0
	--移除其中一个生物
	World:despawnCreature(actors[1])
	--在聊天框显示
	Chat:sendSystemMsg("移除了"..actors[1])
else--如果范围内没有生物
	--在聊天框显示
	Chat:sendSystemMsg("(0,7,0)至(50,57,50)范围内没有生物")
end

```

spawnItem
------------------------------------

*   参数及类型：
    *   x,y,z:[**`number`**](/docs/API/global.md#Lua原生数据类型)
    *   itemid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
    *   num:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   objid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：在指定位置生成道具
*   具体使用案例如下：

```lua
--在(0,0)高度7的位置生成3个土块
--前三个参数0,7,0是生成坐标
--第四个参数101是生成的物品id
--最后一个参数3是生成的数量
local result,objid=World:spawnItem(0,7,0,101,3)
--在聊天框显示提示
Chat:sendSystemMsg("在(0,0)高度7的位置生成了3个土块，它们在存档中的id是"..objid)

```

despawnItemByBox
--------------------------------------------------

*   参数及类型：
    *   x1,y1,z1:[**`number`**](/docs/API/global.md#Lua原生数据类型)起始位置
    *   x2,y2,z2:[**`number`**](/docs/API/global.md#Lua原生数据类型)最终位置
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：移除道具(通过区域)
*   具体使用案例如下：

```lua
--移除指定区域内所有掉落物
--前三个参数为区域起点坐标
--后三个参数为区域终点坐标
World:despawnItemByBox(-20,0,-20,20,50,20)
--在聊天框显示
Chat:sendSystemMsg("移除了(-20,0,-20)至(20,50,20)区域内的所有掉落物")

```

despawnItemByObjid
------------------------------------------------------

*   参数及类型：
    *   objid:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：移除道具(通过ID)
*   具体使用案例如下：

```lua
--每当有玩家做动画表情，移除房主周围10格内的某一掉落物
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--获取房主的坐标
	local result,x,y,z=Player:getPosition(0)
	--获取房主周围10格内的掉落物数量和列表
	local result2,num,list=World:getActorsByBox(3,x-10,y-10,z-10,x+10,y+10,z+10)
	if num>0 then--如果存在掉落物
		--移除第一组物品
		World:despawnItemByObjid(list[1])
		--在聊天框显示
		Chat:sendSystemMsg("附近10格发现掉落物品，已移除了其中一组")
	else--如果不存在掉落物
		--在聊天框显示
		Chat:sendSystemMsg("附近10格没有发现掉落物品！")
	end
end
--注册动画表情监听器，当玩家做动画表情时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

spawnProjectile
------------------------------------------------

*   参数及类型：
    *   shooter:[**`number`**](/docs/API/global.md#Lua原生数据类型)设置投掷物归属的objid
    *   itemid:[**`number`**](/docs/API/global.md#Lua原生数据类型)投掷物id
    *   x,y,z:[**`number`**](/docs/API/global.md#Lua原生数据类型)投掷物起点
    *   dstx,dsty,dstz:[**`number`**](/docs/API/global.md#Lua原生数据类型)投掷物终点
    *   speed:[**`number`**](/docs/API/global.md#Lua原生数据类型)投掷物速度
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   objid:[**`number`**](/docs/API/global.md#Lua原生数据类型)投掷物的实例ID
*   该方法的主要作用：生成投掷物
*   具体使用案例如下：

```lua
local result = World:spawnProjectile(shooter, itemid, x, y, z, dstx, dsty, dstz, speed)

```

spawnProjectileByDir
----------------------------------------------------------

*   参数及类型：
    *   shooter:[**`number`**](/docs/API/global.md#Lua原生数据类型)设置投掷物归属的objid
    *   itemid:[**`number`**](/docs/API/global.md#Lua原生数据类型)投掷物id
    *   x,y,z:[**`number`**](/docs/API/global.md#Lua原生数据类型)投掷物起点
    *   dstx,dsty,dstz:[**`number`**](/docs/API/global.md#Lua原生数据类型)投掷物终点
    *   speed:[**`number`**](/docs/API/global.md#Lua原生数据类型)投掷物速度
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   objid:[**`number`**](/docs/API/global.md#Lua原生数据类型)投掷物的实例ID
*   该方法的主要作用：生成投掷物(通过方向)
*   具体使用案例如下：

```lua
local result = World:spawnProjectileByDir(shooter, itemid, x, y, z, dirx, diry, dirz, speed)

```

calcDistance
------------------------------------------

*   参数及类型：
    *   pos1:[**`table`**](/docs/API/global.md#Lua原生数据类型)起始位置{x,y,z}
    *   pos2:[**`table`**](/docs/API/global.md#Lua原生数据类型)最终位置{x,y,z}
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   distance:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：计算位置之间的距离
*   具体使用案例如下：

```lua
--计算两点间的直线距离
--第一个参数是由起点坐标组成的表
--第二个参数是由终点坐标组成的表
local result,distance=World:calcDistance({x=0,y=0,z=0},{x=10,y=10,z=10})
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度0到(10,10)高度10的直线距离是"..distance)

```

playParticalEffect
-----------------------------------------------------------

*   参数及类型：
    *   x,y,z:[**`number`**](/docs/API/global.md#Lua原生数据类型)位置
    *   particleId:[**`number`**](/docs/API/global.md#Lua原生数据类型)特效id
    *   scale:[**`number`**](/docs/API/global.md#Lua原生数据类型)特效大小
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：在指定位置播放特效
*   具体使用案例如下：

```lua
--在(0,0)高度7的位置播放烟雾特效
--前三个参数是播放特效的位置坐标
--第四个参数是播放特效的特效id，具体可以在“迷你世界ID查询”的“特效表数据”里查看
--最后一个参数是特效的缩放比例
World:playParticalEffect(0,7,0,1001,1)
--在聊天框显示
Chat:sendSystemMsg("在(0,0)高度7的位置生成了一个烟雾特效")

```

stopEffectOnPosition
---------------------------------------------------------------

*   参数及类型：
    *   x,y,z:[**`number`**](/docs/API/global.md#Lua原生数据类型)位置
    *   particleId:[**`number`**](/docs/API/global.md#Lua原生数据类型)特效id
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：停止指定位置的特效
*   具体使用案例如下：

```lua
--停止指定位置的指定特效
--前三个参数是停止播放特效的位置坐标
--最后一个参数是需要停止的特效id
World:stopEffectOnPosition(0,7,0,1001)
--在聊天框显示
Chat:sendSystemMsg("停止了(0,0)高度7位置的1001烟雾特效")

```

setEffectScaleOnPosition
-----------------------------------------------------------------------

*   参数及类型：
    *   x,y,z:[**`number`**](/docs/API/global.md#Lua原生数据类型)位置
    *   particleId:[**`number`**](/docs/API/global.md#Lua原生数据类型)特效id
    *   scale:[**`number`**](/docs/API/global.md#Lua原生数据类型)特效大小
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：设置指定位置的特效大小
*   具体使用案例如下：

```lua
--缩放指定位置的指定特效
--前三个参数是需要缩放特效的坐标
--第四个参数是需要缩放的特效id
--最后一个参数是设置的缩放比例
World:setEffectScaleOnPosition(0,7,0,1001,2)
--在聊天框显示
Chat:sendSystemMsg("把(0,0)高度7位置的烟雾特效放大了两倍")

```

randomParticleEffectID
-------------------------------------------------------------------

*   参数及类型：`none`
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   result:[**`number`**](/docs/API/global.md#Lua原生数据类型)特效id
*   该方法的主要作用：随机特效类型，随机返回一种特效ID
*   具体使用案例如下：

```lua
--获取一个随机特效id
local result,id=World:randomParticleEffectID()
--在聊天框显示
Chat:sendSystemMsg("获取到了一个随机特效id："..id)

```

playSoundEffectOnPos
---------------------------------------------------------------

*   参数及类型：
    *   pos:[**`table`**](/docs/API/global.md#Lua原生数据类型){x,y,z}
    *   soundId:[**`number`**](/docs/API/global.md#Lua原生数据类型)音效ID
    *   volume:[**`number`**](/docs/API/global.md#Lua原生数据类型)音量调节
    *   pitch:[**`number`**](/docs/API/global.md#Lua原生数据类型)音调调节
    *   isLoop:[**`bool`**](/docs/API/global.md#Lua原生数据类型)是否循环播放
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：在指定位置上播放指定音效
*   具体使用案例如下：

```lua
--在(0,0)高度7的位置播放音乐10713
--第一个参数为播放音乐的坐标组成的表
--第二个参数10713为播放的音效id，具体可以在“迷你世界ID查询”的“音效表数据”里查看
--后三个参数分别是：音量、音高、是否循环播放
World:playSoundEffectOnPos({x=0,y=7,z=0},10713,100,1,false)
--在聊天框显示
Chat:sendSystemMsg("(0,0)高度7的位置正在播放音乐")

```

stopSoundEffectOnPos
---------------------------------------------------------------

*   参数及类型：
    *   pos:[**`table`**](/docs/API/global.md#Lua原生数据类型){x,y,z}
    *   soundId:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：停止指定位置上的指定音效
*   具体使用案例如下：

```lua
--在(0,0)高度7的位置播放音乐10713
World:playSoundEffectOnPos({x=0,y=7,z=0},10713,100,1,false)
--在聊天框显示提示
Chat:sendSystemMsg("(0,0)高度7的位置正在播放音乐，做动画表情即可停止播放")
--当玩家做动画表情时执行此函数
local function Player_PlayAction(event)
	--停止(0,0)高度7位置音乐10713的播放
	--第一个参数为要停止播放音乐的坐标组成的表
	--第二个参数为要停止播放的音乐id，具体可以在“迷你世界ID查询”的“音效表数据”里查看
	World:stopSoundEffectOnPos({x=0,y=7,z=0},10713)
	--在聊天框显示
	Chat:sendSystemMsg("停止了(0,0)高度7音乐10713的播放")
end
--注册一个动画表情监听器，事件发生时执行上面的函数
ScriptSupportEvent:registerEvent([=[Player.PlayAction]=],Player_PlayAction)

```

getLightByPos
-------------------------------------------------

*   参数及类型：
    *   x,y,z:[**`number`**](/docs/API/global.md#Lua原生数据类型)位置
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   lightlv:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   该方法的主要作用：获取光照强度
*   具体使用案例如下：

```lua
local result = World:getLightByPos(x, y, z)

```

setBlockLightEx
-----------------------------------------------------

*   参数及类型：
    *   x,y,z:[**`number`**](/docs/API/global.md#Lua原生数据类型)位置
    *   lv:[**`number`**](/docs/API/global.md#Lua原生数据类型)
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
*   该方法的主要作用：设置光照强度
*   具体使用案例如下：

```lua
local result = World:setBlockLightEx(x, y, z, lv)

```

randomSoundID
-------------------------------------------------

*   参数及类型：
    *   无
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   soundid:[**`number`**](/docs/API/global.md#Lua原生数据类型) 声音ID
*   该方法的主要作用：随机出来的音乐ID
*   具体使用案例如下：

```lua
local result,soundid = World:randomSoundID()

```

randomWeatherID
-----------------------------------------------------

*   参数及类型：
    *   无
*   返回值及类型：
    *   [ErrorCode](/docs/API/global.md#错误码信息).OK
    *   wtype:[**`number`**](/docs/API/global.md#Lua原生数据类型) 天气类型ID
*   该方法的主要作用：随机出来的天气ID
*   具体使用案例如下：

```lua
local result,wtype = World:randomWeatherID()
```