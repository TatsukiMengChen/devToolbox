脚本常见问题
======

1.Block中的data在什么地方使用
--------------------

data使用有具体需求,此处不建议开发者使用。开发者尽可能使用已封装过的没有data的新接口

* * *

2.自定义的Block和Item应该如何获取ID (或 data?)(用于 setBlock、spawnItem 等)
-----------------------------------------------------------

有两种办法可以获取到自定义类型的ID，<1>使用手持触发器去点击获取 <2>依赖相关的触发事件去打印ID 比如，如果是自定义的方块或者生物，可以将其放置在地图里然后用手持触发器去点击获取信息，也可以通过触发相关事件去打印出ID。 代码示例如下：

```lua
Callback_ClickBlock = function(event_args)
   local blockid = event_args['blockid']
   Chat:sendSystemMsg('点击的方块ID为'..blockid)
end
ScriptSupportEvent:registerEvent([=[Player.ClickBlock]=], Callback_ClickBlock)
```

* * *

3.如何创建线程
------------------

```lua
threadpool:work(function()
--这里写在新线程中需要运行的内容
end)
```

4.Block 接口中的 setBlockAllForNotify/setBlockAllForUpdate 方法的参数 flag 需要更多信息
------------------------------------------------------------------------

setBlockAllForNotify/setBlockAllForUpdate方法中的flag和data参数对开发者来说都是不可用的，新版wiki描述上已修正

* * *

5.ObjectLib 方法里的 uuid 该如何获取
---------------------------

目前开发者暂时没法直接获取到，我们会在下一版里迭代更新，详情请关注更新通知

* * *

6.World:playSoundEffectOnPos 方法的 soundId 参数需要更多信息
-------------------------------------------------

最新一期Wiki会放出soundId\[2\]表，与触发器内的音效库同步

* * *

7.World 类中可否提供一个获取有所有 Actor 的方法，或者历遍其的方法 (非 World:getActorsByBox)
-----------------------------------------------------------------

由于游戏机制及效率考虑的原因，此功能不给予提供。但我们会提供触发器生物库的ActorId\[3\]表

* * *

8.Event 需要更详细的用法及参数解释
---------------------

Event即为开发者事件，是指玩家在游戏内进行了某些操作后触发的对应事件。比如玩家点击了某个方块， 这时就会触发玩家的点击方块事件，即名为"Player.ClickBlock"的事件，开发者只要注册监听该事件就能进行点击方块后的对应操作。 注册监听事件的方法如下：ScriptSupportEvent:registerEvent(\[=\[Player.ClickBlock\]=\], function(event\_args) ... end)。 而开发者事件在进行回调时会传回来一些对应的参数，每个开发者事件对应的参数可参考wiki中的事件系统\[4\]部分。

* * *

9.UI 接口中的 setGBattleUI/setShapeLine/setShapeCircle 方法的参数 name 及 uiname 需要更多信息
-----------------------------------------------------------------------------

1)setGBattleUI方法的参数name是string类型的枚举值，可选值有如下几种情况:

<table><tbody><tr><td><span>name</span></td><td><span>value type</span></td><td><span>value describe</span></td></tr><tr><td><span>'left_title'</span></td><td><span>string</span></td><td><span>左标题（第1）</span></td></tr><tr><td><span>'right_title'</span></td><td><span>string</span></td><td><span>右标题（/40）</span></td></tr><tr><td><span>'left_desc'</span></td><td><span>string</span></td><td><span>左描述（大吉大利，我是第一）</span></td></tr><tr><td><span>'left_little_desc'</span></td><td><span>string</span></td><td><span>左简述（排名1）</span></td></tr><tr><td><span>'right_little_desc'</span></td><td><span>string</span></td><td><span>右简述（战胜4）</span></td></tr><tr><td><span>'battle_btn'</span></td><td><span>boolean</span></td><td><span>比分导航栏面板按钮显示</span></td></tr><tr><td><span>'result'</span></td><td><span>boolean</span></td><td><span>比赛结果显示</span></td></tr><tr><td><span>'result_bkg'</span></td><td><span>boolean</span></td><td><span>比赛结果底板显示</span></td></tr><tr><td><span>'reopen'</span></td><td><span>boolean</span></td><td><span>再来一局按钮显示</span></td></tr></tbody></table>

2)setShapeLine及setShapeCircle这两个接口目前暂时无效果，可不用理会。后面自定义用户界面(Custom UI)完成后可将其替代

* * *

10.UI:ShowScreenEffect 方法的 type 需要更多信息
--------------------------------------

该接口是用于显示屏幕特效，其中type的值为1表示speedline，2表示powerline，3表示fog

* * *

11.Game:addRenderGlobalEffect 方法的 path 参数需要更多信息
-----------------------------------------------

path即为全局特效的路径，目前可用的是path只有"particles/Fog.ent"，详情可参考范例集合\[5\]里面给出的例子

* * *

12.Game:getDefString 方法的 id 需要更多信息
----------------------------------

不提倡开发者使用上述接口，鼓励开发者使用自己定义的字符串

* * *

13.Player:setActionAttrState 方法的 actionattr 参数需要更多信息
----------------------------------------------------

setActionAttrState是设置玩家特殊属性的状态(例如可移动、可攻击等)的接口，actionattr参数可参考PLAYERATTR\_ENABLE\[6\]

* * *

14.Team 接口中的 teamid 参数需要更多信息
----------------------------

目前我们游戏中最多支持六个队伍，六个队伍的ID及颜色对应如下： 

<table><tbody><tr><td><span>&nbsp; 队伍</span></td><td><span>&nbsp; 对应颜色</span></td><td><span>&nbsp;TeamID</span></td></tr><tr><td><span>&nbsp;队伍1</span></td><td><span>&nbsp;红色</span></td><td><span>&nbsp;1</span></td></tr><tr><td><span>&nbsp;队伍2</span></td><td><span>&nbsp;蓝色</span></td><td><span>&nbsp;2</span></td></tr><tr><td><span>&nbsp;队伍3</span></td><td><span>&nbsp;绿色</span></td><td><span>&nbsp;3</span></td></tr><tr><td><span>&nbsp;队伍4</span></td><td><span>&nbsp;黄色</span></td><td><span>&nbsp;4</span></td></tr><tr><td><span>&nbsp;队伍5</span></td><td><span>&nbsp;橙色</span></td><td><span>&nbsp;5</span></td></tr><tr><td><span>&nbsp;队伍6</span></td><td><span>&nbsp;紫色</span></td><td><span>&nbsp;6</span></td></tr><tr><td><span>&nbsp;观战队</span></td><td><span>&nbsp;无</span></td><td><span>&nbsp;999</span></td></tr></tbody></table>

Team相关接口中，可以teamid使用-1表示全部队伍。玩家或生物如果不设置队伍的话默认teamid是为0，也是无队伍的一种

* * *

15.appendSpeed 接口中的x,y,z参数信息
----------------------------

该接口的参数x,y,z表示设定一个移动距离，需要传入整数。

案例：假设把Z设定为5，当执行一次该接口后，那么objid就会向+z轴移动5格的距离

写法：appendSpeed(objid,0,0,5)

* * *

16.getBlockPowerStatus 接口中的pos的使用方法
-----------------------------------

假设想判断坐标为（7、7、7）位置的方块通电状态，

正确的写法：

```lua
local pos = {x=7,y=7,z=7}
Block:getBlockPowerStatus(pos)
```

常见错误写法：

```lua
local pos = {7,7,7}
Block:getBlockPowerStatus(pos)
```

* * *

17.UI接口为什么没有效果？
---------------

ui相关的接口暂时不能用，等后续更新。

* * *

18.如何让游戏开始5秒后，每隔5秒生成一批生物？
-------------------------

```lua
--5秒后开始刷怪 每隔5秒刷一次 坐标(0,7,0) 怪物id3400 生成5只
local function r(e)
    local t=e.second
    if t>5 and (t-20)%5==0 then
        World:spawnCreature(0,7,0,3400,5)
    end
end
ScriptSupportEvent:registerEvent("Game.RunTime",r)
```

* * *

19.游戏坐标(x,y,z)分别指什么？
--------------------

x：横坐标，y：竖坐标，z：纵坐标；

（x，y，z）代表：坐标（x，z）高度y的位置，如图：

![](https://image.mini1.cn/c/20210227/7c85d0cd4c0cf394dafd00629e6c94ab.png)

* * *

20.如何查看某个方块的坐标？
---------------

```lua
--点击方块显示坐标
local function f2(e)
    local x,y,z=math.floor(e.x),math.floor(e.y),math.floor(e.z)
    Chat:sendSystemMsg("( "..x.." , "..y.." , "..z.." )")
    print(x,y,z)
end
ScriptSupportEvent:registerEvent('Player.ClickBlock',f2)
```

* * *

21.输出的聊天框消息为什么会是星号(\*)？
-----------------------

数字太多会被屏蔽，可以使用print输出，然后打开“测试”，在运行日志里查看：

![](https://image.mini1.cn/c/20210227/03d9e489723fee91194636413b984d58.png)

* * *

22.可以自定义NPC的AI吗？
----------------

目前没有相关接口。可以使用插件里自带的一些AI。

* * *

23.为什么生成方块接口那么卡？
----------------

不要一次性生成太多方块，不同设备性能不同，一般尽量不要超过100。

* * *

24.如何修改玩家的血量和饱食度？或者跳跃高度、移动速度等属性？
--------------------------------

使用Player:setAttr(uid,attr,value)接口。

* * *

25.如何不允许玩家放置某种特定方块？
-------------------

```lua
--不允许放置的方块id为1
local function f3(e)
    if e.blockid==1 then
        Block:destroyBlock(e.x,e.y,e.z)
    end
end
ScriptSupportEvent:registerEvent('Block.PlaceBy',f3)
```

* * *

26.为什么我用脚本生成的生物，离一定距离的话，隔段时间就消失了？
---------------------------------

这是bug，已经提交修复，等待后续更新。

* * *

27.如何在游戏开始30秒后，从(0,7,0)到(15,10,15)范围内随机生成一些生物？
----------------------------------------------

```lua
--30:游戏开始30秒后 (0,7,0)和(15,10,15):生成范围 {{3400,5},{3401,6},{3402,7}}:生成的生物id和数量
local st=30
local x0,y0,z0=0,7,0
local x1,y1,z1=15,10,15
local actors={{3400,5},{3401,6},{3402,7}}
local function r(e)
    local t=e.second
    if t==st then
        local i=0
        for i=1,#actors do
            World:spawnCreature(math.random(x0,x1),math.random(y0,y1),math.random(z0,z1),actors[i][1],actors[i][2])
        end
    end
end
ScriptSupportEvent:registerEvent("Game.RunTime",r)
```

* * *

28.如何更改玩家模型？
------------

修改状态插件，在“效果”里选择“更改玩家模型”。需要改模型的时候使用Actor:addBuff(objid,buffid,bufflv)接口给玩家添加这个状态即可。

* * *

29.能否让玩家在某个区域范围内，自动向前加速？
------------------------

```lua
local x0,y0,z0=0,7,0
local x1,y1,z1=15,10,15
local function r()
    local r,n,ps=World:getAllPlayers(1)
    local i=0
    for i=1,n do
        local r2,x,y,z=Player:getPosition(ps[i])
        if x>x0 and x<x1 and y>y0 and y<y1 and z>z0 and z<z1 then
            local r3,dx,dy,dz=Actor:getFaceDirection(ps[i])
            Actor:appendSpeed(ps[i],dx/math.abs(dx+dz),0,dz/math.abs(dx+dz))
        end
    end
end
ScriptSupportEvent:registerEvent("Game.Run",r)
```

* * *

30.如何查看生物id？
------------

```lua
--点击生物，输出id
local function c(e)
    local r,id=Creature:getActorID(e.toobjid)
    Chat:sendSystemMsg(id)
end
ScriptSupportEvent:registerEvent('Player.ClickActor',c)
```

* * *

31.如何清空玩家背包？
------------

使用Backpack:clearAllPack(uid)接口。

* * *

32.为什么使用Player:setPosition(uid,x,y,z)接口，玩家会卡在虚空无法移动？
----------------------------------------------------

如果设置的坐标距离过远，不在玩家加载的区块范围内（视野范围），就会导致玩家卡在虚空。可以使用“复活玩家到指定坐标”代替，即Player:reviveToPos(uid,x,y,z)接口。

* * *

33.——
-----

* * *

34.如何修改生物属性，比如血量、速度等？
---------------------

使用Creature:setAttr(objid,attr,value)接口。

* * *

35.如何等待1秒后继续执行？
---------------

```lua
threadpool:wait(1)
```

* * *

36.如何在指定位置生成生物？
---------------

使用World:spawnCreature(x,y,z,actorid,num)接口。

* * *

37.如何攻击生物时，在生物头顶显示剩余血量？
-----------------------

```lua
local function Eath(e)
    local p,a=e.eventobjid,e.toobjid
    local r=Actor:isPlayer(a)
    if r~=0 then
        local r1,maxhp=Creature:getAttr(a,1)
        local r2,hp=Creature:getAttr(a,2)
        Actor:shownickname(a,true)
        Actor:setnickname(a,"#G"..math.floor(hp).."#R/"..math.floor(maxhp))
    end
end
ScriptSupportEvent:registerEvent('Player.AttackHit',Eath)
```

* * *

38.能否监听玩家放置生物蛋的事件？
------------------

可以，玩家放置生物蛋会触发“生物生成”事件。

* * *

39.如何实现玩家长按Shift加速？
-------------------

监听“长按按键事件”，判断事件中的按键如果是Shift，就增加玩家速度。

* * *

40.如何获取玩家手持道具的id？
-----------------

使用Player:getCurToolID(uid)接口。

* * *

41.为什么计时器窗口会消失？
---------------

打开背包后计时器的文字会消失，目前不能解决。可以把显示计时器放在“游戏运行”事件里。

* * *

42.如何设置玩家坐标？
------------

使用Actor:setPosition(objid,x,y,z)或Player:setPosition(objid,x,y,z)接口。

* * *

43.能否在游戏运行中更改地图游戏人数上限？
----------------------

不能。但是可以监听玩家进入游戏事件，然后判断当前游戏人数是否大于某个值，是的话就传送玩家到地图外面。

* * *

44.能否把玩家踢出游戏？
-------------

可以设置玩家游戏结果为负，或者在“游戏运行”事件里设置玩家坐标的高度为负，让玩家在地图下方无法移动。

* * *

45.为什么设置了方块无法被破坏，但还是会被炸掉？
-------------------------

目前“方块无法被破坏”无法避免炸弹、激光等的破坏，只能在插件设置方块抗性为-1，或者监听方块被破坏事件，破坏后重新生成。

* * *

46.玩家离开一定距离后，NPC会消失，这个bug可以解决吗？
-------------------------------

已经提交，等待后续更新。目前可以改成“玩家进入区域，生成NPC；玩家离开区域，移除NPC”来代替。

* * *

47.如何改变生物模型？
------------

目前没有这种接口。只能先移除再创建。

* * *

48.能否获取整个地图的生物数量？
-----------------

无法获取整个地图的，但是可以获取指定区域的生物数量。

* * *

49.如何清除某个生物？
------------

使用World:despawnCreature(objid)或Actor:killSelf(objid)接口。

* * *

50.能否获取指定坐标上的生物id？
------------------

不能从坐标获取生物。可以从范围获取，获取到的是整个区域内的生物。

* * *

51.如何让生物出现几秒后消失，如何再出现，一直循环？
---------------------------

```lua
as={}
function r2(e)
    if e.second%4==0 then
        _,as=World:spawnCreature(0,7,0,3400,5)
    elseif e.second%4==2 then
        for _,a in pairs(as) do
            World:despawnActor(a)
        end
    end
end
ScriptSupportEvent:registerEvent([=[Game.RunTime]=],r2)
```

* * *

52.能否移除家园宠物？
------------

```lua
local function depet(e)
    local p,a=e.eventobjid,e.toobjid
    if Actor:isPlayer(p)==1001 then a=p end
    local _,id=Creature:getActorID(a)
    if id>10000 then
        World:despawnActor(a)
    end
end
ScriptSupportEvent:registerEvent([=[Player.ClickActor]=],depet)
ScriptSupportEvent:registerEvent([=[Actor.Collide]=],depet)
```