# 封装游戏API

> 感谢莫小仙大佬提供的封装API  
[莫小仙的网站](https://ycbrmsn.com/)

## 封装背包API

```lua
--[[ 封装背包API v1.0.0
  create by 莫小仙 on 2022-06-04
]]
BackpackAPI = {}
 
--[[
  @param  {integer} bartype: 1快捷栏 2储存栏 3装备栏
  @return {integer | nil} 道具格起始ID，nil表示获取失败
  @return {integer | nil} 道具格末尾ID，nil表示获取失败
]]
function BackpackAPI.getBackpackBarIDRange (bartype)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getBackpackBarIDRange(bartype)
  end, '获取道具背包栏ID范围', 'bartype=', bartype)
end
 
--[[
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @return {integer | nil} 背包栏大小，nil表示获取失败
]]
function BackpackAPI.getBackpackBarSize (bartype)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getBackpackBarSize(bartype)
  end, '获取道具背包栏大小', 'bartype=', bartype)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @param  {integer} itemid 道具id
  @param  {integer | nil} num 道具数量，默认为1
  @param  {integer | nil} durability 耐久度，默认为满
  @return {boolean} 是否成功
]]
function BackpackAPI.setGridItem (objid, gridid, itemid, num, durability)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:setGridItem(objid, gridid, itemid, num, durability)
  end, '设置背包格道具', 'objid=', objid, ',gridid=', gridid, ',itemid=', itemid, ',num=', num, ',durability=', durability)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @param  {integer | nil} num 道具数量，默认全部
  @return {boolean} 是否成功
]]
function BackpackAPI.removeGridItem (objid, gridid, num)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:removeGridItem(objid, gridid, num)
  end, '通过道具格移除道具', 'objid=', objid, ',gridid=', gridid, ',num=', num)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @param  {integer | nil} num 道具数量，默认全部
  @return {integer | nil} 成功移除数量，nil表示移除失败
]]
function BackpackAPI.removeGridItemByItemID (objid, itemid, num)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:removeGridItemByItemID(objid, itemid, num)
  end, '通过道具id移除道具', 'objid=', objid, ',itemid=', itemid, ',num=', num)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @return {boolean} 是否成功
]]
function BackpackAPI.clearPack (objid, bartype)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:clearPack(objid, bartype)
  end, '清空指定背包栏', 'objid=', objid, ',bartype=', bartype)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {boolean} 是否成功
]]
function BackpackAPI.clearAllPack (objid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:clearAllPack(objid)
  end, '清空全部背包栏', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridsrc 原背包栏id
  @param  {integer} griddst 目标背包栏id
  @param  {integer | nil} num 道具数量，默认全部
  @return {boolean} 是否成功
]]
function BackpackAPI.moveGridItem (objid, gridsrc, griddst, num)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:moveGridItem(objid, gridsrc, griddst, num)
  end, '移动背包道具', 'objid=', objid, ',gridsrc=', gridsrc, ',griddst=', griddst, ',num=', num)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridsrc 原背包栏id
  @param  {integer} griddst 目标背包栏id
  @return {boolean} 是否成功
]]
function BackpackAPI.swapGridItem (objid, gridsrc, griddst)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:swapGridItem(objid, gridsrc, griddst)
  end, '交换背包道具', 'objid=', objid, ',gridsrc=', gridsrc, ',griddst=', griddst)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @param  {integer | nil} num 道具数量，默认为1
  @return {boolean} 是否有足够空间存放道具
]]
function BackpackAPI.enoughSpaceForItem (objid, itemid, num)
  return Backpack:enoughSpaceForItem(objid, itemid, num) == ErrorCode.OK
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @return {integer | nil} 背包能存放的道具剩余总数量，nil表示计算失败
]]
function BackpackAPI.calcSpaceNumForItem (objid, itemid)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:calcSpaceNumForItem(objid, itemid)
  end, '计算背包能存放的道具剩余总数量', 'objid=', objid, ',itemid=', itemid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @return {integer | nil} 背包栏有道具的格子数量，nil表示获取信息失败
  @return {table | nil} 有道具的道具格id数组，nil表示获取信息失败
]]
function BackpackAPI.getBackpackBarValidList (objid, bartype)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getBackpackBarValidList(objid, bartype)
  end, '获取背包道具栏有道具的道具格信息', 'objid=', objid, ',bartype=', bartype)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @return {integer | nil} 背包栏道具种类数量，nil表示获取信息失败
  @return {table | nil} 各种道具的道具数量数组，nil表示获取信息失败
]]
function BackpackAPI.getBackpackBarItemList (objid, bartype)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getBackpackBarItemList(objid, bartype)
  end, '获取背包道具栏道具种类信息', 'objid=', objid, ',bartype=', bartype)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @param  {integer} itemid 道具id
  @return {boolean} 背包里是否有某个道具
]]
function BackpackAPI.hasItemByBackpackBar (objid, bartype, itemid)
  return Backpack:hasItemByBackpackBar(objid, bartype, itemid) == ErrorCode.OK
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @param  {integer} itemid 道具id
  @return {integer | nil} 背包里某个道具总数，nil表示获取失败
  @return {table | nil} 道具所在背包格id数组，nil表示获取失败
]]
function BackpackAPI.getItemNumByBackpackBar (objid, bartype, itemid)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getItemNumByBackpackBar(objid, bartype, itemid)
  end, '获取背包道具栏某个道具总数', 'objid=', objid, ',bartype=', bartype, ',itemid=', itemid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} bartype 1快捷栏 2储存栏 3装备栏
  @return {integer | nil} 道具id，nil表示获取失败
  @return {integer | nil} 道具数量，nil表示获取失败
]]
function BackpackAPI.getGridItemID (objid, bartype)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getGridItemID(objid, bartype)
  end, '获取指定背包栏道具信息', 'objid=', objid, ',bartype=', bartype)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {string | nil} 道具名称，nil表示获取失败
]]
function BackpackAPI.getGridItemName (objid, gridid)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getGridItemName(objid, gridid)
  end, '获取指定道具格道具名称', 'objid=', objid, ',gridid=', gridid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {integer | nil} 该道具堆叠数量，nil表示获取失败
  @return {integer | nil} 该道具最大堆叠数量，nil表示获取失败
]]
function BackpackAPI.getGridStack (objid, gridid)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getGridStack(objid, gridid)
  end, '获取背包指定道具格道具堆叠信息', 'objid=', objid, ',gridid=', gridid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {integer | nil} 该道具耐久度，nil表示获取失败
  @return {integer | nil} 该道具最大耐久度，nil表示获取失败
]]
function BackpackAPI.getGridDurability (objid, gridid)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getGridDurability(objid, gridid)
  end, '获取背包指定道具格道具耐久度', 'objid=', objid, ',gridid=', gridid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {integer | nil} 该道具附魔数量，nil表示获取失败
  @return {table | nil} 该道具附魔id数组，nil表示获取失败
]]
function BackpackAPI.getGridEnchantList (objid, gridid)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getGridEnchantList(objid, gridid)
  end, '获取背包指定道具格道具附魔信息', 'objid=', objid, ',gridid=', gridid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {integer | nil} 该道具工具类型，nil表示获取失败
]]
function BackpackAPI.getGridToolType (objid, gridid)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getGridToolType(objid, gridid)
  end, '获取背包指定道具格道具工具类型', 'objid=', objid, ',gridid=', gridid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @param  {integer} num 道具数量
  @return {integer | nil} 成功添加的数量，nil表示添加失败
]]
function BackpackAPI.addItem (objid, itemid, num)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:addItem(objid, itemid, num)
  end, '添加道具到背包', 'objid=', objid, ',itemid=', itemid, ',num=', num)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @param  {integer | nil} num 道具数量，默认为全部
  @return {boolean} 是否成功
]]
function BackpackAPI.discardItem (objid, gridid, num)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:discardItem(objid, gridid, num)
  end, '丢弃背包某个格子里的道具', 'objid=', objid, ',gridid=', gridid, ',num=', num)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} gridid 道具格id
  @return {integer | nil} 道具数量，nil表示获取失败
]]
function BackpackAPI.getGridNum (objid, gridid)
  return YcApiHelper.callResultMethod(function ()
    return Backpack:getGridNum(objid, gridid)
  end, '获取背包某个格子的道具数量', 'objid=', objid, ',gridid=', gridid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} resid 资源id
  @return {boolean} 是否成功
]]
function BackpackAPI.actEquipUpByResID (objid, resid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:actEquipUpByResID(objid, resid)
  end, '玩家穿上装备', 'objid=', objid, ',resid=', resid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} equipid 资源id
  @return {boolean} 是否成功
]]
function BackpackAPI.actEquipOffByEquipID (objid, equipid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:actEquipOffByEquipID(objid, equipid)
  end, '玩家脱下装备', 'objid=', objid, ',equipid=', equipid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} resid 资源id
  @return {boolean} 是否成功
]]
function BackpackAPI.actCreateEquip (objid, resid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:actCreateEquip(objid, resid)
  end, '创建装备', 'objid=', objid, ',resid=', resid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} equipid 资源id
  @return {boolean} 是否成功
]]
function BackpackAPI.actDestructEquip (objid, equipid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Backpack:actDestructEquip(objid, equipid)
  end, '销毁装备', 'objid=', objid, ',equipid=', equipid)
end
```

## 封装世界API

```lua
--[[ 封装世界API v1.0.0
  create by 莫小仙 on 2022-06-12
]]
WorldAPI = {}
 
--[[
  @return {boolean} 是否是白天
]]
function WorldAPI.isDaytime ()
  return World:isDaytime() == ErrorCode.OK
end
 
--[[
  @return {integer | nil} 游戏中当前几点，nil表示获取时间失败
]]
function WorldAPI.getHours ()
  return YcApiHelper.callResultMethod(function ()
    return World:getHours()
  end, '获取游戏中当前几点')
end
 
--[[
  @param  {integer} hour 小时数
  @return {boolean} 是否成功
]]
function WorldAPI.setHours (hour)
  return YcApiHelper.callIsSuccessMethod(function ()
    return World:setHours(hour)
  end, '设置游戏中当前几点', 'hour=', hour)
end
 
--[[
  @param  {integer} objtype 对象类型：
    0全部
    1玩家OBJ_TYPE.OBJTYPE_PLAYER
    2生物OBJ_TYPE.OBJTYPE_CREATURE
    3掉落物OBJ_TYPE.OBJTYPE_DROPITEM
    4投掷物OBJ_TYPE.OBJTYPE_MISSILE
  @param  {number} x1 区域起点x
  @param  {number} y1 区域起点y
  @param  {number} z1 区域起点z
  @param  {number} x2 区域终点x
  @param  {number} y2 区域终点y
  @param  {number} z2 区域终点z
  @return {integer | nil} 区域内该种对象数量，nil表示获取信息失败
  @return {table | nil} 区域内该种对象的对象id数组，nil表示获取信息失败
]]
function WorldAPI.getActorsByBox (objtype, x1, y1, z1, x2, y2, z2)
  return YcApiHelper.callResultMethod(function ()
    return World:getActorsByBox(objtype, x1, y1, z1, x2, y2, z2)
  end, '获取范围内对象', 'objtype=', objtype, ',x1=', x1, ',y1=', y1, ',z1=',
    z1, ',x2=', x2, ',y2=', y2, ',z2=', z2)
end
 
--[[
  @param  {integer} objid 对象id
  @return {boolean} 是否成功
]]
function WorldAPI.despawnActor (objid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return World:despawnActor(objid)
  end, '移除对象', 'objid=', objid)
end
 
--[[
  @param  {number} x 生成生物的位置x
  @param  {number} y 生成生物的位置y
  @param  {number} z 生成生物的位置z
  @param  {integer} actorid 生物类型id
  @param  {integer} actorCnt 生物数量
  @return {table | nil} 被创建生物的对象id数组，nil表示生成失败
]]
function WorldAPI.spawnCreature (x, y, z, actorid, actorCnt)
  return YcApiHelper.callResultMethod(function ()
    return World:spawnCreature(x, y, z, actorid, actorCnt)
  end, '生成生物', 'x=', x, ',y=', y, ',z=', z, ',actorid=', actorid,
    ',actorCnt=', actorCnt)
end
 
--[[
  @param  {integer} objid 对象id
  @return {boolean} 是否成功
]]
function WorldAPI.despawnCreature (objid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return World:despawnCreature(objid)
  end, '移除生物', 'objid=', objid)
end
 
--[[
  @param  {number} x 生成掉落物的位置x
  @param  {number} y 生成掉落物的位置y
  @param  {number} z 生成掉落物的位置z
  @param  {integer} itemId 道具id
  @param  {integer} itemCnt 道具数量
  @return {integer | nil} 掉落物id，nil表示生成失败
]]
function WorldAPI.spawnItem (x, y, z, itemId, itemCnt)
  return YcApiHelper.callResultMethod(function ()
    return World:spawnItem(x, y, z, itemId, itemCnt)
  end, '在指定位置生成掉落物', 'x=', x, ',y=', y, ',z=', z, ',itemId=', itemId,
    ',itemCnt=', itemCnt)
end
 
--[[
  @param  {number} x1 区域起点x
  @param  {number} y1 区域起点y
  @param  {number} z1 区域起点z
  @param  {number} x2 区域终点x
  @param  {number} y2 区域终点y
  @param  {number} z2 区域终点z
  @return {boolean} 是否成功
]]
function WorldAPI.despawnItemByBox (x1, y1, z1, x2, y2, z2)
  return YcApiHelper.callIsSuccessMethod(function ()
    return World:despawnItemByBox(x1, y1, z1, x2, y2, z2)
  end, '通过区域移除掉落物', 'x1=', x1, ',y1=', y1, ',z1=', z1, ',x2=', x2, ',y2=', y2, ',z2=', z2)
end
 
--[[
  @param  {number} objid 掉落物id
  @return {boolean} 是否成功
]]
function WorldAPI.despawnItemByObjid (objid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return World:despawnItemByObjid(objid)
  end, '通过id移除掉落物', 'objid=', objid)
end
 
--[[
  @param  {integer} shooter 投掷物的主人
  @param  {integer} itemid 投掷物(道具)id
  @param  {number} x 生成投掷物的位置x
  @param  {number} y 生成投掷物的位置y
  @param  {number} z 生成投掷物的位置z
  @param  {number} dstx 投掷物的目标位置x
  @param  {number} dsty 投掷物的目标位置y
  @param  {number} dstz 投掷物的目标位置z
  @param  {number} speed 投掷物的速度
  @return {integer | nil} 投掷物的对象id，nil表示生成失败
]]
function WorldAPI.spawnProjectile (shooter, itemid, x, y, z, dstx, dsty, dstz, speed)
  return YcApiHelper.callResultMethod(function ()
    return World:spawnProjectile(shooter, itemid, x, y, z, dstx, dsty, dstz, speed)
  end, '生成投掷物', 'shooter=', shooter, ',itemid=', itemid, ',x=', x, ',y=',
    y, ',z=', z, ',dstx=', dstx, ',dsty=', dsty, ',dstz=', dstz, ',speed=', speed)
end
 
--[[
  @param  {integer} shooter 投掷物的主人
  @param  {integer} itemid 投掷物(道具)id
  @param  {number} x 生成投掷物的位置x
  @param  {number} y 生成投掷物的位置y
  @param  {number} z 生成投掷物的位置z
  @param  {number} dirx 投掷物的运动方向x，如投掷物朝正东方向水平运动，则dirx大于0，diry、dirz等于0
  @param  {number} diry 投掷物的运动方向y
  @param  {number} dirz 投掷物的运动方向z
  @param  {number} speed 投掷物的速度
  @return {integer | nil} 投掷物的对象id，nil表示生成失败
]]
function WorldAPI.spawnProjectileByDir (shooter, itemid, x, y, z, dirx, diry, dirz, speed)
  return YcApiHelper.callResultMethod(function ()
    return World:spawnProjectileByDir(shooter, itemid, x, y, z, dirx, diry, dirz, speed)
  end, '生成投掷物', 'shooter=', shooter, ',itemid=', itemid, ',x=', x, ',y=',
    y, ',z=', z, ',dirx=', dirx, ',diry=', diry, ',dirz=', dirz, ',speed=', speed)
end
 
--[[
  @param  {table} pos1 位置1，{ x, y, z }
  @param  {table} pos2 位置2，{ x, y, z }
  @return {number} 位置之间的距离
]]
function WorldAPI.calcDistance (pos1, pos2)
  return World:calcDistance(pos1, pos2)
end
 
--[[
  @param  {number} x 特效的位置x
  @param  {number} y 特效的位置y
  @param  {number} z 特效的位置z
  @param  {integer} particleId 特效id
  @param  {number} scale 特效大小
  @return {boolean} 是否成功
]]
function WorldAPI.playParticalEffect (x, y, z, particleId, scale)
  return YcApiHelper.callIsSuccessMethod(function ()
    return World:playParticalEffect(x, y, z, particleId, scale)
  end, '在指定位置播放特效', 'x=', x, ',y=', y, ',z=', z, ',particleId=',
    particleId, ',scale=', scale)
end
 
--[[
  @param  {number} x 特效的位置x
  @param  {number} y 特效的位置y
  @param  {number} z 特效的位置z
  @param  {integer} particleId 特效id
  @return {boolean} 是否成功
]]
function WorldAPI.stopEffectOnPosition (x, y, z, particleId)
  return YcApiHelper.callIsSuccessMethod(function ()
    return World:stopEffectOnPosition(x, y, z, particleId)
  end, '停止指定位置的特效', 'x=', x, ',y=', y, ',z=', z, ',particleId=', particleId)
end
 
--[[
  @param  {number} x 特效的位置x
  @param  {number} y 特效的位置y
  @param  {number} z 特效的位置z
  @param  {integer} particleId 特效id
  @param  {number} scale 特效大小
  @return {boolean} 是否成功
]]
function WorldAPI.setEffectScaleOnPosition (x, y, z, particleId, scale)
  return YcApiHelper.callIsSuccessMethod(function ()
    return World:setEffectScaleOnPosition(x, y, z, particleId, scale)
  end, '设置指定位置的特效大小', 'x=', x, ',y=', y, ',z=', z, ',particleId=',
    particleId, ',scale=', scale)
end
 
--[[
  @param  {table} pos 播放位置，{ x, y, z }
  @param  {integer} soundId 音效id
  @param  {number} volume 音量，声音大小
  @param  {number} pitch 音调，包括低音、中音、高音的do、rui、mi
  @param  {boolean} isLoop 是否循环播放
  @return {boolean} 是否成功
]]
function WorldAPI.playSoundEffectOnPos (pos, soundId, volume, pitch, isLoop)
  return YcApiHelper.callIsSuccessMethod(function ()
    return World:playSoundEffectOnPos(pos, soundId, volume, pitch, isLoop)
  end, '在指定位置上播放音效', 'pos=', pos, ',soundId=', soundId, ',volume=',
    volume, ',pitch=', pitch, ',isLoop=', isLoop)
end
 
--[[
  @param  {table} pos 播放位置，{ x, y, z }
  @param  {integer} soundId 音效id
  @return {boolean} 是否成功
]]
function WorldAPI.stopSoundEffectOnPos (pos, soundId)
  return YcApiHelper.callIsSuccessMethod(function ()
    return World:stopSoundEffectOnPos(pos, soundId)
  end, '停止指定位置上播放的音效', 'pos=', pos, ', soundId=', soundId)
end
```

## 封装玩家API

```lua
--[[ 封装玩家API v1.0.0
  create by 莫小仙 on 2022-06-13
]]
PlayerAPI = {}
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} attrtype 属性类型
  @return {number | nil} 属性值，nil表示获取失败
]]
function PlayerAPI.getAttr (objid, attrtype)
  return YcApiHelper.callResultMethod(function ()
    return Player:getAttr(objid, attrtype)
  end, '玩家属性获取', 'objid=', objid, ',attrtype=', attrtype)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} attrtype 属性类型
  @param  {number} val 属性值
  @return {boolean} 是否成功
]]
function PlayerAPI.setAttr (objid, attrtype, val)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:setAttr(objid, attrtype, val)
  end, '玩家属性设置', 'objid=', objid, ',attrtype=', attrtype, ',val=', val)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {boolean} 是否是房主
]]
function PlayerAPI.isMainPlayer (objid)
  return Player:isMainPlayer(objid) == ErrorCode.OK
end
 
--[[
  @return {integer | nil} 房主迷你号，nil表示没有房主
]]
function PlayerAPI.getMainPlayerUin ()
  return YcApiHelper.callResultMethod(function ()
    return Player:getMainPlayerUin()
  end, '获取本地玩家的uin')
end
 
--[[
  @param  {integer} objid 迷你号
  @return {integer | nil} 玩家比赛结果TEAM_RESULTS: 
    0胜负未定 TEAM_RESULTS.TEAM_RESULTS_NONE
    1游戏胜利 TEAM_RESULTS.TEAM_RESULTS_WIN
    2游戏结束 TEAM_RESULTS.TEAM_RESULTS_LOSE
    3游戏平局 TEAM_RESULTS.TEAM_RESULTS_DOGFALL
    nil表示获取失败
]]
function PlayerAPI.getGameResults (objid)
  return YcApiHelper.callResultMethod(function ()
    return Player:getGameResults(objid)
  end, '获取玩家比赛结果', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} result 比赛结果TEAM_RESULTS: 
    0胜负未定 TEAM_RESULTS.TEAM_RESULTS_NONE
    1游戏胜利 TEAM_RESULTS.TEAM_RESULTS_WIN
    2游戏结束 TEAM_RESULTS.TEAM_RESULTS_LOSE
    3游戏平局 TEAM_RESULTS.TEAM_RESULTS_DOGFALL 
  @return {boolean} 是否成功
]]
function PlayerAPI.setGameResults (objid, result)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:setGameResults(objid, result)
  end, '设置玩家比赛结果', 'objid=', objid, ',result=', result)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {boolean} 是否成功
]]
function PlayerAPI.teleportHome (objid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:teleportHome(objid)
  end, '传送玩家到出生点', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {integer | nil} 道具id，0表示空手，nil表示获取失败
]]
function PlayerAPI.getCurToolID (objid)
  return YcApiHelper.callResultMethod(function ()
    return Player:getCurToolID(objid)
  end, '获取玩家当前手持的物品id', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {string | nil} 昵称，nil表示获取失败
]]
function PlayerAPI.getNickname (objid)
  return YcApiHelper.callResultMethod(function ()
    return Player:getNickname(objid)
  end, '获取玩家昵称', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} teamid 队伍id，0~6，0表示无队伍
  @return {boolean} 是否成功
]]
function PlayerAPI.setTeam (objid, teamid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:setTeam(objid, teamid)
  end, '设置玩家队伍', 'objid=', objid, ',teamid=', teamid)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {integer | nil} 队伍id，nil表示获取失败
]]
function PlayerAPI.getTeam (objid)
  return YcApiHelper.callResultMethod(function ()
    return Player:getTeam(objid)
  end, '获取玩家队伍', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {number | nil} 饱食度，nil表示获取失败
]]
function PlayerAPI.getFoodLevel (objid)
  return YcApiHelper.callResultMethod(function ()
    return Player:getFoodLevel(objid)
  end, '获取当前饱食度', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {number} foodLevel 饱食度
  @return {boolean} 是否成功
]]
function PlayerAPI.setFoodLevel (objid, foodLevel)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:setFoodLevel(objid, foodLevel)
  end, '设置玩家饱食度', 'objid=', objid, ',foodLevel=', foodLevel)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {integer | nil} 快捷栏序号，0~7，nil表示获取失败
]]
function PlayerAPI.getCurShotcut (objid)
  return YcApiHelper.callResultMethod(function ()
    return Player:getCurShotcut(objid)
  end, '获取当前所用快捷栏键', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @param  {number} cd 冷却时长
  @return {boolean} 是否成功
]]
function PlayerAPI.setSkillCD (objid, itemid, cd)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:setSkillCD(objid, itemid, cd)
  end, '设置技能CD', 'objid=', objid, ',itemid=', itemid, ',cd=', cd)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {number} x 位置的x
  @param  {number} y 位置的y
  @param  {number} z 位置的z
  @return {boolean} 是否成功
]]
function PlayerAPI.reviveToPos (objid, x, y, z)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:reviveToPos(objid, x, y, z)
  end, '复活玩家到指定点', 'objid=', objid, ',x=', x, ',y=', y, ',z=', z)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {number} x 位置的x
  @param  {number} y 位置的y
  @param  {number} z 位置的z
  @return {boolean} 是否成功
]]
function PlayerAPI.setRevivePoint (objid, x, y, z)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:setRevivePoint(objid, x, y, z)
  end, '改变玩家复活点位置', 'objid=', objid, ',x=', x, ',y=', y, ',z=', z)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} actid 动作id
  @return {boolean} 是否成功
]]
function PlayerAPI.playAct (objid, actid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:playAct(objid, actid)
  end, '玩家播放动画', 'objid=', objid, ',actid=', actid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {string} info 飘窗文字
  @return {boolean} 是否成功
]]
function PlayerAPI.notifyGameInfo2Self (objid, info)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:notifyGameInfo2Self(objid, info)
  end, '对玩家显示飘窗文字', 'objid=', objid, ',info=', info)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {number} yaw 水平旋转角度
  @param  {number} pitch 竖直旋转角度，0为水平方向
  @return {boolean} 是否成功
]]
function PlayerAPI.rotateCamera (objid, yaw, pitch)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:rotateCamera(objid, yaw, pitch)
  end, '旋转玩家镜头', 'objid=', objid, ',yaw=', yaw, ',pitch=', pitch)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} viewmode 视角模式VIEWPORTTYPE
    0主视角     VIEWPORTTYPE.MAINVIEW
    1背视角     VIEWPORTTYPE.BACKVIEW
    2正视角     VIEWPORTTYPE.FRONTVIEW
    3背视角2    VIEWPORTTYPE.BACK2VIEW
    4俯视角     VIEWPORTTYPE.TOPVIEW
    5自定义视角 VIEWPORTTYPE.CUSTOMVIEW
  @param  {boolean} islock 是否锁定
  @return {boolean} 是否成功
]]
function PlayerAPI.changeViewMode (objid, viewmode, islock)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:changeViewMode(objid, viewmode, islock)
  end, '改变玩家视角模式', 'objid=', objid, ',viewmode=', viewmode, ',islock=', islock)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} actionattr 玩家行为属性PLAYERATTR，如设置玩家可移动
  @param  {boolean} switch 是否开启
  @return {boolean} 是否成功
]]
function PlayerAPI.setActionAttrState (objid, actionattr, switch)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:setActionAttrState(objid, actionattr, switch)
  end, '设置玩家行为属性状态', 'objid=', objid, ',actionattr=', actionattr,
    ',switch=', switch)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} actionattr 玩家行为属性PLAYERATTR，如设置玩家可移动
  @return {boolean} 是否开启
]]
function PlayerAPI.checkActionAttrState (objid, actionattr)
  return Player:checkActionAttrState(objid, actionattr) == ErrorCode.OK
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {number} x 位置的x
  @param  {number} y 位置的y
  @param  {number} z 位置的z
  @return {boolean} 是否成功
]]
function PlayerAPI.setPosition (objid, x, y, z)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:setPosition(objid, x, y, z)
  end, '设置玩家位置', 'objid=', objid, ',x=', x, ',y=', y, ',z=', z)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {number | nil} 位置的x，nil表示获取失败
  @return {number | nil} 位置的y，nil表示获取失败
  @return {number | nil} 位置的z，nil表示获取失败
]]
function PlayerAPI.getAimPos (objid)
  return YcApiHelper.callResultMethod(function ()
    return Player:getAimPos(objid)
  end, '获取玩家准星位置', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} itemid 道具id
  @param  {integer} attrtype 属性类型
    1道具不可丢弃 PLAYERATTR.ITEM_DISABLE_THROW
    2道具不可掉落 PLAYERATTR.ITEM_DISABLE_DROP
  @param  {boolean} switch 是否开启
  @return {boolean} 是否成功
]]
function PlayerAPI.setItemAttAction (objid, itemid, attrtype, switch)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:setItemAttAction(objid, itemid, attrtype, switch)
  end, '设置玩家道具设置属性', 'objid=', objid, ',itemid=', itemid, ',attrtype=',
    attrtype, ',switch=', switch)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} musicid 音效id
  @param  {number} volume 音量，声音大小
  @param  {number} pitch 音调，包括低音、中音、高音的do、rui、mi
  @param  {boolean} isLoop 是否循环播放
  @return {boolean} 是否成功
]]
function PlayerAPI.playMusic (objid, musicid, volume, pitch, isLoop)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:playMusic(objid, musicid, volume, pitch, isLoop)
  end, '对玩家播放背景音乐', 'objid=', objid, ',musicid=', musicid, ',volume=',
    volume, ',pitch=', pitch, ',isLoop=', isLoop)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {boolean} 是否成功
]]
function PlayerAPI.stopMusic (objid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:stopMusic(objid)
  end, '停止播放玩家背景音乐', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 迷你号
  @return {boolean} 是否成功
]]
function PlayerAPI.setGameWin (objid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Player:setGameWin(objid)
  end, '使玩家获得游戏胜利', 'objid=', objid)
end
```

## 封装道具API

```lua
--[[ 封装道具API v1.0.0
  create by 莫小仙 on 2022-06-19
]]
ItemAPI = {}
 
--[[
  @param  {integer} itemid 道具id
  @return {string | nil} 道具名称，nil表示获取失败
]]
function ItemAPI.getItemName (itemid)
  return YcApiHelper.callResultMethod(function ()
    return Item:getItemName(itemid)
  end, '获取道具名称', 'itemid=', itemid)
end
 
--[[
  @param  {integer} objid 对象id
  @return {integer | nil} 道具id，nil表示获取失败
]]
function ItemAPI.getItemId (objid)
  return YcApiHelper.callResultMethod(function ()
    return Item:getItemId(objid)
  end, '获取itemid', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 掉落物id
  @return {integer | nil} 掉落物数量，nil表示获取失败
]]
function ItemAPI.getDropItemNum (objid)
  return YcApiHelper.callResultMethod(function ()
    return Item:getDropItemNum(objid)
  end, '获取掉落物数量', 'objid=', objid)
end
```

## 封装行为者API

```lua
--[[ 封装行为者API v1.1.0
  create by 莫小仙 on 2022-06-15
  last modified on 2022-08-10
]]
ActorAPI = {}
 
--[[
  @param  {integer} objid 对象id
  @return {boolean} 对象是否是玩家
]]
function ActorAPI.isPlayer (objid)
  return Actor:isPlayer(objid) == ErrorCode.OK
end
 
--[[
  @param  {integer} objid 对象id
  @return {integer | nil} 对象类型OBJ_TYPE
    1玩家   OBJ_TYPE.OBJTYPE_PLAYER
    2生物   OBJ_TYPE.OBJTYPE_CREATURE
    3掉落物 OBJ_TYPE.OBJTYPE_DROPITEM
    4投掷物 OBJ_TYPE.OBJTYPE_MISSILE
    nil表示获取类型失败
]]
function ActorAPI.getObjType (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getObjType(objid)
  end, '获取对象类型', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 对象id
  @return {boolean} 是否在空中
]]
function ActorAPI.isInAir (objid)
  return Actor:isInAir(objid) == ErrorCode.OK
end
 
--[[
  获取生物位置。这个函数很容易调用失败，就不打印警告信息了
  @param  {integer} objid 对象id
  @return {number | nil} 位置的x，nil表示在玩家附近找不到对象
  @return {number | nil} 位置的y，nil表示在玩家附近找不到对象
  @return {number | nil} 位置的z，nil表示在玩家附近找不到对象
]]
function ActorAPI.getPosition (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getPosition(objid)
  end, nil, 'objid=', objid)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {number} 位置的x
  @param  {number} 位置的y
  @param  {number} 位置的z
  @return {boolean} 是否成功
]]
function ActorAPI.setPosition (objid, x, y, z)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:setPosition(objid, x, y, z)
  end, '设置对象位置', 'objid=', objid, ',x=', x, ',y=', y, ',z=', z)
end
 
--[[
  @param  {integer} objid 生物id
  @return {boolean} 是否成功
]]
function ActorAPI.killSelf (objid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:killSelf(objid)
  end, '杀死自己', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 对象id
  @return {integer | nil} 朝向，0东1西2北3南，nil表示获取朝向失败
]]
function ActorAPI.getCurPlaceDir (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getCurPlaceDir(objid)
  end, '获取当前朝向', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {number} x 位置的x
  @param  {number} y 位置的y
  @param  {number} z 位置的z
  @param  {number} speed 速度的倍数
  @return {boolean} 是否成功
]]
function ActorAPI.tryMoveToPos (objid, x, y, z, speed)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:tryMoveToPos(objid, x, y, z, speed)
  end, '向目标位置移动', 'objid=', objid, ',x=', x, ',y=', y, ',z=', z, ',speed=', speed)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {number} hp 生命值
  @return {boolean} 是否成功
]]
function ActorAPI.addHP (objid, hp)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:addHP(objid, hp)
  end, '增加当前生命量', 'objid=', objid, ',hp=', hp)
end
 
--[[
  @param  {integer} objid 生物id
  @return {number | nil} 生命值，nil表示获取失败
]]
function ActorAPI.getHP (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getHP(objid)
  end, '获取当前生命量', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 生物id
  @return {number | nil} 最大生命值，nil表示获取失败
]]
function ActorAPI.getMaxHP (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getMaxHP(objid)
  end, '获取最大生命量', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {number} oxygen 氧气值
  @return {boolean} 是否成功
]]
function ActorAPI.addOxygen (objid, oxygen)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:addOxygen(objid, oxygen)
  end, '增加当前氧气值', 'objid=', objid, ',oxygen=', oxygen)
end
 
--[[
  @param  {integer} objid 生物id
  @return {number | nil} 氧气值，nil表示获取失败
]]
function ActorAPI.getOxygen (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getOxygen(objid)
  end, '获取当前氧气值', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} slot 装备栏id：0头饰 1胸甲 2裤子 3鞋子 4披风 5手中持有的物品
  @param  {integer} enchantId 附魔id
  @param  {integer} enchantLevel 附魔等级
  @return {boolean} 是否成功
]]
function ActorAPI.addEnchant (objid, slot, enchantId, enchantLevel)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:addEnchant(objid, slot, enchantId, enchantLevel)
  end, '增加装备附魔', 'objid=', objid, ',slot=', slot, ',enchantId=', enchantId,
    ',enchantLevel=', enchantLevel)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} slot 装备栏id：0头饰 1胸甲 2裤子 3鞋子 4披风 5手中持有的物品
  @param  {integer} enchantId 附魔id
  @return {boolean} 是否成功
]]
function ActorAPI.removeEnchant (objid, slot, enchantId)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:removeEnchant(objid, slot, enchantId)
  end, '移除装备附魔', 'objid=', objid, ',slot=', slot, ',enchantId=', enchantId)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {number} yaw 水平角度
  @return {boolean} 是否成功
]]
function ActorAPI.setFaceYaw (objid, yaw)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:setFaceYaw(objid, yaw)
  end, '设置actor原地旋转偏移角度', 'objid=', objid, ',yaw=', yaw)
end
 
--[[
  @param  {integer} objid 对象id
  @return {number | nil} 水平角度，nil表示获取失败
]]
function ActorAPI.getFaceYaw (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getFaceYaw(objid)
  end, '获取actor原地旋转偏移角度', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {number} offset 转动角度
  @return {boolean} 是否成功
]]
function ActorAPI.turnFaceYaw (objid, offset)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:turnFaceYaw(objid, offset)
  end, '转动actor横向偏移角度', 'objid=', objid, ',offset=', offset)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {number} pitch 与水平方向的夹角
  @return {boolean} 是否成功
]]
function ActorAPI.setFacePitch (objid, pitch)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:setFacePitch(objid, pitch)
  end, '设置actor视角仰望角度', 'objid=', objid, ',pitch=', pitch)
end
 
--[[
  @param  {integer} objid 对象id
  @return {number | nil} 与水平方向的夹角，nil表示获取失败
]]
function ActorAPI.getFacePitch (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getFacePitch(objid)
  end, '获取actor视角仰望角度', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {number} offset 转动角度
  @return {boolean} 是否成功
]]
function ActorAPI.turnFacePitch (objid, offset)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:turnFacePitch(objid, offset)
  end, '转动actor仰望偏移角度', 'objid=', objid, ',offset=', offset)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {integer} particleId 特效id
  @return {boolean} 是否成功
]]
function ActorAPI.playBodyEffect (objid, particleId)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:playBodyEffect(objid, particleId)
  end, '播放特效', 'objid=', objid, ',particleId=', particleId)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {integer} particleId 特效id
  @return {boolean} 是否成功
]]
function ActorAPI.stopBodyEffect (objid, particleId)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:stopBodyEffect(objid, particleId)
  end, '停止特效', 'objid=', objid, ',particleId=', particleId)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {boolean} bkill 是否显示被击败效果
  @return {boolean} 是否成功
]]
function ActorAPI.clearActorWithId (actorid, bkill)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:clearActorWithId(actorid, bkill)
  end, '清除生物ID为actorid的生物', 'actorid=', actorid, ',bkill=', bkill)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {integer} attacktype 伤害类型HURTTYPE
  @return {boolean} 是否成功
]]
function ActorAPI.setAttackType (objid, attacktype)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:setAttackType(objid, attacktype)
  end, '设置伤害类型', 'objid=', objid, ',attacktype=', attacktype)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {integer} immunetype 伤害类型HURTTYPE
  @param  {boolean} isadd 是否免疫
  @return {boolean} 是否成功
]]
function ActorAPI.setImmuneType (objid, immunetype, isadd)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:setImmuneType(objid, immunetype, isadd)
  end, '设置免疫伤害类型', 'objid=', objid, ',immunetype=', immunetype, ',isadd=', isadd)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} mountobjid 被骑乘生物id
  @param  {integer} posindex 骑乘位
  @return {boolean} 是否成功
]]
function ActorAPI.mountActor (objid, mountobjid, posindex)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:mountActor(objid, mountobjid, posindex)
  end, '登上、脱离载具', 'objid=', objid, ',mountobjid=', mountobjid, ',posindex=', posindex)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} actionattr 生物行为类型，如可被杀死
  @param  {integer} switch 是否开启
  @return {boolean} 是否成功
]]
function ActorAPI.setActionAttrState (objid, actionattr, switch)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:setActionAttrState(objid, actionattr, switch)
  end, '设置生物行为状态', 'objid=', objid, ',actionattr=', actionattr, ',switch=', switch)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} actionattr 生物行为类型，如可被杀死
  @return {boolean | nil} 生物行为类型是否开启，nil表示获取失败
]]
function ActorAPI.getActionAttrState (objid, actionattr)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getActionAttrState(objid, actionattr)
  end, '获取生物行为状态', 'objid=', objid, ',actionattr=', actionattr)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {number} x 位置的x
  @param  {number} y 位置的y
  @param  {number} z 位置的z
  @param  {boolean} cancontrol 是否可控制移动
  @param  {boolean} bshowtip 是否显示提示
  @return {boolean} 是否成功
]]
function ActorAPI.tryNavigationToPos (objid, x, y, z, cancontrol, bshowtip)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:tryNavigationToPos(objid, x, y, z, cancontrol, bshowtip)
  end, '寻路到目标位置', 'objid=', objid, ',x=', x, ',y=', y, ',z=', z,
    ',cancontrol=', cancontrol, ',bshowtip=', bshowtip)
end
 
--[[
  @param  {integer} objid 生物id
  @return {integer | nil} 被骑乘生物的objid，nil表示获取失败
]]
function ActorAPI.getRidingActorObjId (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getRidingActorObjId(objid)
  end, '获取骑乘生物的objid', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} particleId 特效id
  @param  {number} scale 特效大小
  @return {boolean} 是否成功
]]
function ActorAPI.playBodyEffectById (objid, particleId, scale)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:playBodyEffectById(objid, particleId, scale)
  end, '在指定Actor身上播放特效', 'objid=', objid, ',particleId=', particleId,
    ',scale=', scale)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} particleId 特效id
  @return {boolean} 是否成功
]]
function ActorAPI.stopBodyEffectById (objid, particleId)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:stopBodyEffectById(objid, particleId)
  end, '停止指定Actor身上的特效', 'objid=', objid, ',particleId=', particleId)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} particleId 特效id
  @param  {number} scale 特效大小
  @return {boolean} 是否成功
]]
function ActorAPI.setBodyEffectScale (objid, particleId, scale)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:setBodyEffectScale(objid, particleId, scale)
  end, '设置指定Actor身上的特效大小', 'objid=', objid, ',particleId=', particleId,
    ',scale=', scale)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} soundId 音效id
  @param  {number} volume 音量，声音大小
  @param  {number} pitch 音调，包括低音、中音、高音的do、rui、mi
  @param  {boolean} isLoop 是否循环播放
  @return {boolean} 是否成功
]]
function ActorAPI.playSoundEffectById (objid, soundId, volume, pitch, isLoop)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:playSoundEffectById(objid, soundId, volume, pitch, isLoop)
  end, '在指定Actor身上播放音效', 'objid=', objid, ',soundId=', soundId, ',volume=',
    volume, ',pitch=', pitch, ',isLoop=', isLoop)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} soundId 音效id
  @return {boolean} 是否成功
]]
function ActorAPI.stopSoundEffectById (objid, soundId)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:stopSoundEffectById(objid, soundId)
  end, '停止指定Actor身上的音效', 'objid=', objid, ',soundId=', soundId)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {number} x 速度的x
  @param  {number} y 速度的y
  @param  {number} z 速度的z
  @return {boolean} 是否成功
]]
function ActorAPI.appendSpeed (objid, x, y, z)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:appendSpeed(objid, x, y, z)
  end, '给actor附加一个速度', 'objid=', objid, ',x=', x, ',y=', y, ',z=', z)
end
 
--[[
  @param  {integer} objid 对象id
  @return {number | nil} 朝向的x，nil表示获取朝向失败
  @return {number | nil} 朝向的y，nil表示获取朝向失败
  @return {number | nil} 朝向的z，nil表示获取朝向失败
]]
function ActorAPI.getFaceDirection (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getFaceDirection(objid)
  end, '获取actor朝向', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 对象id
  @return {number | nil} 眼睛的高度，nil表示获取失败
]]
function ActorAPI.getEyeHeight (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getEyeHeight(objid)
  end, '获取眼睛高度', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 对象id
  @return {number | nil} 位置的x，nil表示获取失败
  @return {number | nil} 位置的y，nil表示获取失败
  @return {number | nil} 位置的z，nil表示获取失败
]]
function ActorAPI.getEyePosition (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getEyePosition(objid)
  end, '获取眼睛位置', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 对象id
  @return {number | nil} 身体尺寸，nil表示获取失败
]]
function ActorAPI.getBodySize (objid)
  return YcApiHelper.callResultMethod(function ()
    return Actor:getBodySize(objid)
  end, '获取身体尺寸', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 对象id
  @param  {integer} actid 动作id
  @return {boolean} 是否成功
]]
function ActorAPI.playAct (objid, actid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:playAct(objid, actid)
  end, '播放动作', 'objid=', objid, ',actid=', actid)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {boolean} bshow 是否显示
  @return {boolean} 是否成功
]]
function ActorAPI.shownickname (objid, bshow)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:shownickname(objid, bshow)
  end, '设置昵称显示', 'objid=', objid, ',bshow=', bshow)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {string} nickname 昵称
  @return {boolean} 是否成功
]]
function ActorAPI.setnickname (objid, nickname)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:setnickname(objid, nickname)
  end, '设置昵称', 'objid=', objid, ',nickname=', nickname)
end
 
--[[
  @param  {integer} objid 迷你号
  @param  {integer} toobjid 被伤害的玩家迷你号或生物id
  @param  {number} hp 生命值
  @param  {integer} attackType 伤害类型HURTTYPE
  @return {boolean} 是否成功
]]
function ActorAPI.playerHurt (objid, toobjid, hp, attackType)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:playerHurt(objid, toobjid, hp, attackType)
  end, '使玩家对（玩家或生物）造成伤害', 'objid=', objid, ',toobjid=', toobjid, ',hp=', hp,
    ',attackType=', attackType)
end
 
--[[
  @param  {integer} objid 生物id
  @param  {integer} toobjid 被伤害的玩家迷你号或生物id
  @param  {number} hp 生命值
  @param  {integer} attackType 伤害类型HURTTYPE
  @return {boolean} 是否成功
]]
function ActorAPI.actorHurt (objid, toobjid, hp, attackType)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:actorHurt(objid, toobjid, hp, attackType)
  end, '使生物对（玩家或生物）造成伤害', 'objid=', objid, ',toobjid=', toobjid, ',hp=', hp,
    ',attackType=', attackType)
end
 
--[[
  @param  {integer} objid 玩家迷你号/生物id
  @param  {integer} buffid 状态id
  @param  {integer} bufflv 状态等级
  @param  {integer} customticks 帧数，每秒20次
  @return {boolean} 是否成功
]]
function ActorAPI.addBuff (objid, buffid, bufflv, customticks)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:addBuff(objid, buffid, bufflv, customticks)
  end, '增加指定BUFF', 'objid=', objid, ',buffid=', buffid, ',bufflv=', bufflv,
    ',customticks=', customticks)
end
 
--[[
  @param  {integer} objid 玩家迷你号/生物id
  @param  {integer} buffid 状态id
  @return {boolean} 是否成功
]]
function ActorAPI.removeBuff (objid, buffid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:removeBuff(objid, buffid)
  end, '移除指定BUFF', 'objid=', objid,',buffid=', buffid)
end
 
--[[
  @param  {integer} objid 玩家迷你号/生物id
  @return {boolean} 是否成功
]]
function ActorAPI.clearAllBuff (objid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:clearAllBuff(objid)
  end, '清除全部BUFF', 'objid=', objid)
end
 
--[[
  @param  {integer} objid 玩家迷你号/生物id
  @return {boolean} 是否成功
]]
function ActorAPI.clearAllBadBuff (objid)
  return YcApiHelper.callIsSuccessMethod(function ()
    return Actor:clearAllBadBuff(objid)
  end, '清除全部减益BUFF', 'objid=', objid)
end
 
--[[
  是否已经有了指定BUFF
  @param  {integer} objid 玩家迷你号/生物id
  @param  {integer} buffid 状态id
  @return {boolean} 是否有
]]
function ActorAPI.hasBuff (objid, buffid)
  return Actor:hasBuff(objid, buffid) == ErrorCode.OK
end
```