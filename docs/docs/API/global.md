接口常量列表
===========================

可在代码里直接调用无需新建对象，调用形式如下：

```lua
local errorCode = ErrorCode.OK
local worldType = WorldType.OWTYPE_GAMEMAKER

```

**Lua原生数据及其他全局数据的用法描述如下**

Lua原生数据类型
------------------------------------------------------------------------------------

| 数据名称 | 用法描述 |
| --- | --- |
| nil | 表示一个无效值(在条件表达式中相当于false) |
| boolean | 布尔值,包含两个值：false和true |
| number | 实数,表示双精度类型的实浮点数,也可以是整数 |
| string | 字符串,由一对单引号或双引号来表示 |
| table | Lua的一种数据结构，可用来创建不同的数据类型，如：数组、字典等 |
| function | 由 C 或 Lua 编写的函数 |
| userdata | 表示任意存储在变量中的C数据结构 |
| thread | 表示执行的独立线路，用于执行协同程序 |

错误码信息
--------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| ErrorCode.OK | 0 | 正确返回 |
| ErrorCode.FAILED | 1001 | 错误返回 |

存储栏起始位
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BPACK\_SINDEX.BACKPACK\_START\_INDEX | 0 | 背包栏 |
| BPACK\_SINDEX.SHORTCUT\_START\_INDEX | 1000 | 快捷栏 |
| BPACK\_SINDEX.STORAGE\_START\_INDEX | 3000 | 储物箱 |
| BPACK\_SINDEX.EQUIP\_START\_INDEX | 8000 | 装备栏 |

游戏模式
----------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| WorldType.OWTYPE\_SINGLE | 0 | 单人模式 |
| WorldType.OWTYPE\_CREATE | 1 | 多人创造模式 |
| WorldType.OWTYPE\_EXTREMITY | 2 | 极限模式 |
| WorldType.OWTYPE\_CREATE\_RUNGAME | 3 | 由创造模式转的生存 |
| WorldType.OWTYPE\_GAMEMAKER | 4 | 自制玩法的编辑模式 |
| WorldType.OWTYPE\_GAMEMAKER\_RUN | 5 | 自制玩法的运行模式 |
| WorldType.OWTYPE\_FREEMODE | 6 | 冒险模式之自由模式 |
| WorldType.OWTYPE\_RECORD | 9 | 录像模式 |

游戏地形
----------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| TerrainType.TERRAIN\_FLAT | 0 | 平坦地形 |
| TerrainType.TERRAIN\_NORMAL | 1 | 随机地形 |

自定义视角编辑状态
------------------------------------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CameraEditState.CAMERA\_EDIT\_STATE\_NULL | 0 | 空 |
| CameraEditState.CAMERA\_EDIT\_STATE\_EDIT | 1 | 编辑 |
| CameraEditState.CAMERA\_EDIT\_STATE\_TEST | 2 | 测试 |

小地图绘图类型
----------------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| MAPMARK\_TYPE.MMARK\_LINE | 0 | 线形标记 |
| MAPMARK\_TYPE.MMARK\_RECTANGLE | 1 | 矩形标记 |
| MAPMARK\_TYPE.MMARK\_CIRCLE | 2 | 圆形标记 |

装备部位类型
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| EQUIP\_SLOT\_TYPE.EQUIP\_HEAD | 0 | 头 |
| EQUIP\_SLOT\_TYPE.EQUIP\_BREAST | 1 | 身体 |
| EQUIP\_SLOT\_TYPE.EQUIP\_LEGGING | 2 | 腿 |
| EQUIP\_SLOT\_TYPE.EQUIP\_SHOE | 3 | 脚 |
| EQUIP\_SLOT\_TYPE.EQUIP\_PIFENG | 4 | 披风 |
| EQUIP\_SLOT\_TYPE.EQUIP\_WEAPON | 5 | 武器 |
| EQUIP\_SLOT\_TYPE.MAX\_EQUIP\_SLOTS | 6 | \--- |

附魔属性类型
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| MODATTRIB\_TYPE.MODATTR\_MOVE\_SPEED | 0 | 移动速度 |
| MODATTRIB\_TYPE.MODATTR\_SWIM\_SPEED | 1 | 游泳速度 |
| MODATTRIB\_TYPE.MODATTR\_JUMP\_SPEED | 2 | 往上跳的速度 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_PUNCH | 3 | 近程攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_RANGE | 4 | 远程攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_EXPLODE | 5 | 爆炸攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_FIRE | 6 | 火攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_POISON | 7 | 毒攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_WITHER | 8 | 凋零攻击别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_PLAYER | 9 | 攻击玩家时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_UNDEAD | 10 | 攻击亡灵时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ATTACK\_ANIMAL | 11 | 攻击动物别人时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_PUNCH | 12 | 被近程攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_RANGE | 13 | 被远程攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_EXPLODE | 14 | 被爆炸攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_FIRE | 15 | 被火攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_POISON | 16 | 被毒攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_WITHER | 17 | 被凋零攻击时加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGED\_FALLING | 18 | 高处掉下伤害加成的百分比 |
| MODATTRIB\_TYPE.MODATTR\_ARMOR\_PUNCH | 19 | 近程护甲加点 |
| MODATTRIB\_TYPE.MODATTR\_ARMOR\_RANGE | 20 | 远程护甲加点 |
| MODATTRIB\_TYPE.MODATTR\_ARMOR\_EXPLODE | 21 | 爆炸护甲加点 |
| MODATTRIB\_TYPE.MODATTR\_DAMAGE\_ABSORB | 22 | 吸收伤害 |
| MODATTRIB\_TYPE.MODATTR\_CRITICAL\_HIT | 23 | 暴击伤害加成 |
| MODATTRIB\_TYPE.MODATTR\_KNOCK | 24 | 增加攻击别人的击退距离 |
| MODATTRIB\_TYPE.MODATTR\_KNOCK\_RESIST | 25 | 减少击退距离 |
| MODATTRIB\_TYPE.MODATTR\_KNOCK\_RESIST\_PROB | 26 | 击退概率抵抗值, 0.2表示有20%概率不被击退 |
| MODATTRIB\_TYPE.MODATTR\_ACTOR\_SCALE | 27 | 角色大小 0 - 1.0 只针对玩家对象有效 |
| MODATTRIB\_TYPE.MAX\_MOB\_MODATTR | 28 | 怪物 最大附魔属性 |
| MODATTRIB\_TYPE.MODATTR\_DIG\_SPEED | 28 | 挖掘速度 |
| MODATTRIB\_TYPE.MODATTR\_LUCK\_DIG | 29 | 挖掘幸运, 0.2表示增加20%掉落概率 |
| MODATTRIB\_TYPE.MODATTR\_LUCK\_KILLMOB | 30 | 怪物掉落 |
| MODATTRIB\_TYPE.MODATTR\_VIEW\_BRIGHT | 31 | 视野亮度 0 - 1.0 |
| MODATTRIB\_TYPE.MODATTR\_OXYGEN\_SUPPLY | 32 | 氧气提供1:只能水底用， 100: 只能太空用， 101：都能用 10000:恢复氧气 |
| MODATTRIB\_TYPE.MAX\_PLAYER\_MODATTR | 33 | \--- |
| MODATTRIB\_TYPE.MAX\_MOD\_ATTRIB | 33 | \--- |

游戏战斗结果
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| TEAM\_RESULTS.TEAM\_RESULTS\_NONE | 0 | 胜负未定 |
| TEAM\_RESULTS.TEAM\_RESULTS\_WIN | 1 | 胜利 |
| TEAM\_RESULTS.TEAM\_RESULTS\_LOSE | 2 | 失败 |
| TEAM\_RESULTS.TEAM\_RESULTS\_DOGFALL | 3 | 平局 |

声音类型
----------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| GSOUND\_TYPE.GSOUND\_DIG | 0 | 挖掘 |
| GSOUND\_TYPE.GSOUND\_DESTROY | 1 | 破坏 |
| GSOUND\_TYPE.GSOUND\_PLACE | 2 | 放置 |
| GSOUND\_TYPE.GSOUND\_FALLGROUND | 3 | 摔落 |
| GSOUND\_TYPE.GSOUND\_WALK | 4 | 行走 |

生物身体特效
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| ACTORBODY\_EFFECT.BODYFX\_HURT | 0 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_FIRE | 1 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_PORTAL | 2 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_ACCUMFIRE | 3 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DRAGONFIRE | 4 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DRAGONSUMMON | 5 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TAME\_SUCCEED | 6 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TAME\_FAILED | 7 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TAME\_FOOD | 8 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TAME\_NOFOOD | 9 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_AI\_NEEDREEDS | 10 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_FEAR | 11 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_ROLECOLLECT | 12 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_ROLEJUMP | 13 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DEADPROTECT | 14 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DRAGONDIE0 | 15 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DRAGONDIE1 | 16 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DRAGONDIE2 | 17 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_HORSE\_FLY | 18 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DISAPPEAR | 19 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_HORSE\_BENTENG | 20 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_DANCE | 21 | \--- |
| ACTORBODY\_EFFECT.TOOLFX\_JETPACK2 | 22 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_INTERACTION | 23 | \--- |
| ACTORBODY\_EFFECT.HUDFX\_HEADSHOT | 24 | \--- |
| ACTORBODY\_EFFECT.HUDFX\_NORMALSHOT | 25 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_MILKING | 26 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_AI\_ANGRY | 27 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_AI\_SLEEP | 28 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TRANSPORT | 29 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_FORBIDDEN | 30 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_CONCEAL | 31 | 潜行 |
| ACTORBODY\_EFFECT.BODYFX\_WEAPON\_FIRE | 32 | 野人猎手武器上的火 |
| ACTORBODY\_EFFECT.BODYFX\_DIZZY | 33 | 眩晕 |
| ACTORBODY\_EFFECT.BODYFX\_MAKETROUBLE | 34 | \--- |
| ACTORBODY\_EFFECT.BODYFX\_TRAINMOVE | 35 | 火车移动 |
| ACTORBODY\_EFFECT.BODYFX\_AI\_HUNGRY | 36 | 饥饿 |
| ACTORBODY\_EFFECT.BODYFX\_BALL\_CHARGE | 37 | 蓄力踢球的特效 |
| ACTORBODY\_EFFECT.BODYFX\_BALL\_SHOOT\_RELEASE | 38 | 射球瞬间的爆发特效 |
| ACTORBODY\_EFFECT.BODYFX\_ENCH\_FALL | 39 | 附魔速降 |

游戏实例类型
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| OBJ\_TYPE.OBJTYPE\_PLAYER | 1 | 玩家 |
| OBJ\_TYPE.OBJTYPE\_CREATURE | 2 | 生物(包含怪物、动物、NPC ，BOSS等) |
| OBJ\_TYPE.OBJTYPE\_DROPITEM | 3 | 掉落物 |
| OBJ\_TYPE.OBJTYPE\_MISSILE | 4 | 投掷物 |

玩家背包类型
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BACKPACK\_TYPE.SHORTCUT | 1 | 快捷栏 |
| BACKPACK\_TYPE.INVENTORY | 2 | 存储栏 |
| BACKPACK\_TYPE.EQUIP | 3 | 装备栏 |

玩家朝向
----------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| FACE\_DIRECTION.DIR\_NOT\_INIT | \-1 | 未指定 |
| FACE\_DIRECTION.DIR\_NEG\_X | 0 | X反方向 |
| FACE\_DIRECTION.DIR\_POS\_X | 1 | X正方向 |
| FACE\_DIRECTION.DIR\_NEG\_Z | 2 | Z反方向 |
| FACE\_DIRECTION.DIR\_POS\_Z | 3 | Z正方向 |
| FACE\_DIRECTION.DIR\_NEG\_Y | 4 | Y反方向 |
| FACE\_DIRECTION.DIR\_POS\_Y | 5 | Y正方向 |

生物属性枚举
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CREATUREATTR.MAX\_HP | 1 | 最大生命值 |
| CREATUREATTR.CUR\_HP | 2 | 当前生命值 |
| CREATUREATTR.HP\_RECOVER | 3 | 生命恢复 |
| CREATUREATTR.MAX\_HUNGER | 5 | 最大饥饿值 |
| CREATUREATTR.CUR\_HUNGER | 6 | 当前饥饿值 |
| CREATUREATTR.MAX\_OXYGEN | 7 | 最大氧气值 |
| CREATUREATTR.CUR\_OXYGEN | 8 | 当前氧气值 |
| CREATUREATTR.RECOVER\_OXYGEN | 9 | 氧气恢复速度 |
| CREATUREATTR.WALK\_SPEED | 10 | 移动速度 |
| CREATUREATTR.RUN\_SPEED | 11 | 奔跑速度 |
| CREATUREATTR.SWIN\_SPEED | 13 | 游泳速度 |
| CREATUREATTR.JUMP\_POWER | 14 | 跳跃力 |
| CREATUREATTR.WEIGHT | 15 | 重量 |
| CREATUREATTR.DODGE | 16 | 闪避率 |
| CREATUREATTR.ATK\_MELEE | 17 | 近战攻击 |
| CREATUREATTR.ATK\_REMOTE | 18 | 远程攻击 |
| CREATUREATTR.DEF\_MELEE | 19 | 近战防御 |
| CREATUREATTR.DEF\_REMOTE | 20 | 远程防御 |
| CREATUREATTR.DIMENSION | 21 | 模型大小 |

生物属性设置
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CREATUREATTR.ENABLE\_MOVE | 1 | 可移动 |
| CREATUREATTR.ENABLE\_ATTACK | 32 | 可攻击 |
| CREATUREATTR.ENABLE\_BEATTACKED | 64 | 可被攻击 |
| CREATUREATTR.ENABLE\_BEKILLED | 128 | 可被杀死 |
| CREATUREATTR.ENABLE\_PICKUP | 256 | 可拾取道具 |
| CREATUREATTR.ENABLE\_DEATHDROPITEM | 512 | 死亡掉落 |

生物行为枚举
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CREATUREMOTION.IDLE | 1 | 空闲 |
| CREATUREMOTION.STANDBY | 2 | 待机 |
| CREATUREMOTION.STROLL | 3 | 闲逛 |
| CREATUREMOTION.ATK\_MELEE | 4 | 近战攻击 |
| CREATUREMOTION.ATK\_REMOTE | 5 | 远程攻击 |
| CREATUREMOTION.FOLLOW | 6 | 跟随 |
| CREATUREMOTION.SWIM | 7 | 游泳 |
| CREATUREMOTION.RUN\_AWAY | 8 | 逃跑 |
| CREATUREMOTION.SELF\_BOMB | 9 | 自爆 |
| CREATUREMOTION.BEATTRACTED | 10 | 被吸引 |
| CREATUREMOTION.COPULATION | 11 | 交配 |

玩家属性枚举
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| PLAYERATTR.MAX\_HP | 1 | 最大生命值 |
| PLAYERATTR.CUR\_HP | 2 | 当前生命值 |
| PLAYERATTR.HP\_RECOVER | 3 | 生命恢复 |
| PLAYERATTR.LIFE\_NUM | 4 | 生命数 |
| PLAYERATTR.MAX\_HUNGER | 5 | 最大饥饿值 |
| PLAYERATTR.CUR\_HUNGER | 6 | 当前饥饿值 |
| PLAYERATTR.MAX\_OXYGEN | 7 | 最大氧气值 |
| PLAYERATTR.CUR\_OXYGEN | 8 | 当前氧气值 |
| PLAYERATTR.RECOVER\_OXYGEN | 9 | 氧气恢复速度 |
| PLAYERATTR.WALK\_SPEED | 10 | 移动速度 |
| PLAYERATTR.RUN\_SPEED | 11 | 奔跑速度 |
| PLAYERATTR.SNEAK\_SPEED | 12 | 潜行速度 |
| PLAYERATTR.SWIN\_SPEED | 13 | 游泳速度 |
| PLAYERATTR.JUMP\_POWER | 14 | 跳跃力 |
| PLAYERATTR.DODGE | 16 | 闪避率 |
| PLAYERATTR.ATK\_MELEE | 17 | 近战攻击 |
| PLAYERATTR.ATK\_REMOTE | 18 | 远程攻击 |
| PLAYERATTR.DEF\_MELEE | 19 | 近战防御 |
| PLAYERATTR.DEF\_REMOTE | 20 | 远程防御 |
| PLAYERATTR.DIMENSION | 21 | 大小 |
| PLAYERATTR.SCORE | 22 | 分数 |
| PLAYERATTR.LEVEL | 23 | 星星等级 |
| PLAYERATTR.CUR\_STRENGTH | 28 | 当前体力值 |
| PLAYERATTR.MAX\_STRENGTH | 29 | 当前最大体力值 |
| PLAYERATTR.STRENGTH\_RECOVER | 30 | 当前体力值恢复速度 |
| PLAYERATTR.CUR\_LEVELEXP | 26 | 当前经验 |
| PLAYERATTR.CUR\_LEVEL | 27 | 当前等级 |

玩家属性设置
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| PLAYERATTR.ENABLE\_MOVE | 1 | 可移动 |
| PLAYERATTR.ENABLE\_PLACEBLOCK | 2 | 可摆放方块 |
| PLAYERATTR.ENABLE\_OPERATEBLOCK | 4 | 可操作方块 |
| PLAYERATTR.ENABLE\_DESTROYBLOCK | 8 | 可破坏方块 |
| PLAYERATTR.ENABLE\_USEITEM | 16 | 可使用道具 |
| PLAYERATTR.ENABLE\_ATTACK | 32 | 可攻击 |
| PLAYERATTR.ENABLE\_BEATTACKED | 64 | 可被攻击 |
| PLAYERATTR.ENABLE\_BEKILLED | 128 | 可被杀死 |
| PLAYERATTR.ENABLE\_PICKUP | 256 | 可拾取道具 |
| PLAYERATTR.ENABLE\_DEATHDROPITEM | 512 | 死亡掉落 |
| PLAYERATTR.ENABLE\_VEHICLEAUTOFORWARD | 1024 | 载具自动前行 |
| PLAYERATTR.ENABLE\_DISCARDITEM | 2048 | 可丢弃道具 |

玩家道具设置
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| PLAYERATTR.ITEM\_DISABLE\_THROW | 1 | 道具不可丢弃 |
| PLAYERATTR.ITEM\_DISABLE\_DROP | 2 | 道具不可掉落 |

玩家行为枚举
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| PLAYERMOTION.STATIC | 0 | 静止 |
| PLAYERMOTION.WALK | 1 | 行走 |
| PLAYERMOTION.RUN | 2 | 奔跑 |
| PLAYERMOTION.JUMP | 4 | 跳跃 |
| PLAYERMOTION.JUMP\_TWICE | 8 | 二段跳 |
| PLAYERMOTION.SNEAK | 16 | 潜行 |
| PLAYERMOTION.FALL\_GROUND | 32 | 落地 |
| PLAYERMOTION.TURNBACK | 1000000 | 转身(已经取消) |
| PLAYERMOTION.UP | 1000001 | 上升(已经取消) |
| PLAYERMOTION.DOWN | 1000002 | 下降(已经取消) |
| PLAYERMOTION.FALL | 1000003 | 下落(已经取消) |

队伍属性枚举
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| TEAMATTR.PLAYER\_NUM | 1 | 玩家数量 |
| TEAMATTR.SCORE | 2 | 分数 |

伤害类型枚举
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| HURTTYPE.MELEE | 0 | 近战伤害 ATTACK\_PUNCH |
| HURTTYPE.REMOTE | 1 | 远程伤害 ATTACK\_RANGE |
| HURTTYPE.BOMB | 2 | 爆炸伤害 ATTACK\_EXPLODE |
| HURTTYPE.PHYSICS | 3 | 物理伤害 MAX\_PHYSICS\_ATTACK |
| HURTTYPE.BURNING | 3 | 燃烧伤害 ATTACK\_FIRE |
| HURTTYPE.TOXIN | 4 | 毒素伤害 ATTACK\_POISON |
| HURTTYPE.WITHER | 5 | 凋零伤害 ATTACK\_WITHER |
| HURTTYPE.MAGIC | 6 | 元素伤害 MAX\_MAGIC\_ATTACK |
| HURTTYPE.SUN | 6 | 日晒 ATTACK\_SUN |
| HURTTYPE.FALL | 7 | 跌落伤害 ATTACK\_FALLING |
| HURTTYPE.ANVIL | 8 | 被砸中伤害 ATTACK\_ANVIL |
| HURTTYPE.CACTUS | 9 | 仙人掌伤害 ATTACK\_CACTUS |
| HURTTYPE.ASPHYXIA | 10 | 窒息伤害 ATTACK\_WALL |
| HURTTYPE.DROWN | 11 | 溺水伤害 ATTACK\_DROWN |
| HURTTYPE.SUFFOCATE | 12 | 水下生物在空气中窒息伤害 ATTACK\_SUFFOCATE |
| HURTTYPE.ANTIINJURY | 13 | 反伤 ATTACK\_ANTIINJURY |
| HURTTYPE.LASER | 14 | 被激光伤害 ATTACK\_BLOCK\_LASER |

特殊方块类型
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BLOCKID.AIR | 0 | 空气 |

方块属性枚举
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BLOCKATTR.EXPLODE\_RESISTANCE | 1 | 爆炸抗性 |
| BLOCKATTR.HARDNESS | 2 | 硬度 |
| BLOCKATTR.GLISSADE | 3 | 滑行惯性 |
| BLOCKATTR.BURNING\_SPEED | 4 | 燃烧速度 |
| BLOCKATTR.BURNING\_PROBABILITY | 5 | 燃烧几率 |
| BLOCKATTR.LIGHTNESS | 6 | 亮度 |

方块属性设置
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BLOCKATTR.ENABLE\_DESTROYED | 1 | 可破坏 |
| BLOCKATTR.ENABLE\_BEOPERATED | 2 | 可操作 |
| BLOCKATTR.ENABLE\_BEPUSHED | 4 | 可被推动 |
| BLOCKATTR.ENABLE\_DROPITEM | 8 | 可掉落道具 |
| BLOCKATTR.BEPUSHED\_DROPITEM | 16 | 被推动掉落 |

方块状态
----------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| BLOCKSTATUS.ACTIVE | 1 | 活跃(被激活) |
| BLOCKSTATUS.INACTIVE | 2 | 不活跃(未被激活) |

天气状态枚举
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| WEATHERSTATUS.SHINE\_AND\_RAIN | 0 | 晴雨交替 |
| WEATHERSTATUS.SHINE | 1 | 晴天 |
| WEATHERSTATUS.RAIN | 2 | 雨天 |

视口方向
----------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| VIEWPORTTYPE.MAINVIEW | 0 | 主视角 |
| VIEWPORTTYPE.BACKVIEW | 1 | 背视角 |
| VIEWPORTTYPE.FRONTVIEW | 2 | 正视角 |
| VIEWPORTTYPE.BACK2VIEW | 3 | 背视角2 |
| VIEWPORTTYPE.TOPVIEW | 4 | 俯视角 |
| VIEWPORTTYPE.CUSTOMVIEW | 5 | 自定义视角 |

模板库类型
--------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| RESLIBTYPE.NONE | 0 | 无 |
| RESLIBTYPE.BLOCK | 1 | 方块 |
| RESLIBTYPE.ITEM | 2 | 道具 |
| RESLIBTYPE.MONSTER | 3 | 生物 |
| RESLIBTYPE.PARTICLE | 4 | 特效 |
| RESLIBTYPE.SOUND | 5 | 音效 |

变量类型
----------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| POSITION | 1 | 位置 |
| AREAINS | 2 | 区域 |
| NUMBER | 3 | 数值 |
| STRING | 4 | 字符串 |
| BOOLEAN | 5 | 布尔值 |
| PLAYER | 6 | 玩家 |
| PLAYERGROUT | 7 | 玩家组 |
| BLOCKTYPE | 8 | 方块类型 |
| ITEMTYPE | 9 | 道具类型 |
| CREATURE | 10 | 生物 |
| ACTORID | 11 | actor类型 |
| CREATUREGROUP | 12 | 生物组 |
| TIMER | 13 | 计时器 |
| EFFECTTYPE | 14 | 特效类型 |
| SITEGROUP | 15 | 位置组 |
| AREAGROUP | 16 | 区域组 |
| NUMBERGROUP | 17 | 数值组 |
| STRINGGROUP | 18 | 字符串组 |
| BOOLEANGROUP | 19 | 布尔值组 |
| BLOCKTYPEGROUP | 20 | 方块类型组 |
| ITEMTYPEGROUP | 21 | 道具类型组 |
| CREATURETYPEGROUP | 22 | 生物类型组 |
| TIMERGROUP | 23 | 计时器组 |
| EFFECTTYPEGROUP | 24 | 特效类型组 |

图文信息枚举
------------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| GRAPHICS.GRAPHICS\_HORNBOOK | 1 | 文字板 |
| GRAPHICS.GRAPHICS\_SUSPENDBOOK | 2 | 漂浮文字 |
| GRAPHICS.GRAPHICS\_PROGRESS | 3 | 进度条 |
| GRAPHICS.GRAPHICS\_ARROW\_POS | 4 | 箭头 指向位置 |
| GRAPHICS.GRAPHICS\_ARROW\_ACTOR | 5 | 箭头 指向生物 |
| GRAPHICS.GRAPHICS\_LINE\_POS | 6 | 线 指向位置 |
| GRAPHICS.GRAPHICS\_LINE\_ACTOR | 7 | 线 指向生物 |
| GRAPHICS.GRAPHICS\_SURFACE\_POS | 8 | 面 指向界面 |
| GRAPHICS.GRAPHICS\_SURFACE\_ACTOR | 9 | 面 指向生物 |

合成炉枚举
--------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| FURNACEID.FURNACEID\_STONE | 802 | 石炉, |
| FURNACEID.FURNACEID\_IRON | 798 | 铁炉, |
| FURNACEID.FURNACEID\_COPPER | 799 | 铜炉, |

储物箱枚举
--------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| STORAGEID.STORAGEID\_BOX | 801 | 储物箱, |
| STORAGEID.STORAGEID\_BOXROW | 1180 | 大型储物箱（横）, |
| STORAGEID.STORAGEID\_BOXCOL | 1181 | 大型储物箱（竖）, |

排序枚举
----------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| SORT.UP | 0 | 升序, |
| SORT.DOWN | 1 | 降序, |

按键值枚举
----------------------------------------------------------------------

| 字符串 | 用法描述 |
| --- | --- |
| "SPACE" | 空格键(手机跳跃键) |
| "SHIFT" | Shift键(手机潜行键) |
| "A" | A键(手机左移键) |
| "B" | B键 |
| "C" | C键 |
| "D" | D键(手机右移键) |
| "E" | E键 |
| "F" | F键 |
| "G" | G键 |
| "H" | H键 |
| "I" | I键 |
| "J" | J键 |
| "K" | K键 |
| "L" | L键 |
| "M" | M键 |
| "N" | N键 |
| "O" | O键 |
| "P" | P键 |
| "Q" | Q键 |
| "R" | R键 |
| "S" | S键(手机后移键) |
| "T" | T键 |
| "U" | U键 |
| "V" | V键 |
| "W" | W键(手机前移键) |
| "X" | X键 |
| "Y" | Y键 |
| "Z" | Z键 |

移动方式
----------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| MOVETYPE.IDLE | 0 | 默认移动方式, |
| MOVETYPE.FLY | 1 | 飞行, |

设备完整时间类型枚举
---------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CurEventParam.EventDate.time | 1 | 设备完整时间 |

设备时间类型枚举
-------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CurEventParam.EventDate.year | 1 | 设备时间-年 |
| CurEventParam.EventDate.month | 2 | 设备时间-月 |
| CurEventParam.EventDate.day | 3 | 设备时间- 日 |
| CurEventParam.EventDate.hour | 4 |  设备时间-时 |
| CurEventParam.EventDate.minute | 5 |  设备时间-分 |
| CurEventParam.EventDate.second | 6 |  设备时间-秒 |

事件参数类型枚举
-------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| CurEventParam.EventString | 1 | 事件中的字符串 |


QQMusic操作类型
------------------------------------------------------------------------

| 名称 | 数值 | 用法描述 |
| --- | --- | --- |
| QQMUSICOP.PAUSE | 0 | 暂停, |
| QQMUSICOP.RESUME | 1 | 恢复, |
| QQMUSICOP.STOP | 2 | 停止, |
