# 实用脚本

## 获取道具ID表

```lua
--[[
此脚本需要事先创建一个UI，包含一个编辑框和一个按钮
7126910654869158297_1为编辑框ID
7126910654869158297_2为按钮ID
由于编辑框有长度限制，因此需要重复多次 “点击按钮-复制文本” 操作
--]]
a = 1
function test(e)
    if e.btnelenemt == '7126910654869158297_2' then
        text = ''
        repeat
            result,name = Item:getItemName(a)
            if name ~= nil then
                text = text..a..' '..name..'\n'
            end
            a = a+1
        until #text >= 9000
        Customui:setText(0,'7126910654869158297','7126910654869158297_1',text)
    end
end

ScriptSupportEvent:registerEvent([=[UI.Button.Click]=],test)
```

## 一键生成渐变色文本

```lua
text_a = "  Tatsuki丶梦辰 yyds  ,Tatsuki丶梦辰永远的神！"
color = 12

--[[
使用方法：
1、在text_a里输入需要渐变的文本
2、在color中设置选取的渐变色（渐变色具体参考mini_color,可以自行添加颜色,预设共12种颜色，推荐使用12)
3、运行脚本后输出渐变文本
注意事项：
1、输入的文本最好全为中文或者英文，如果一定要中英混合，请保证中文的起始字节为 " 3的倍数+1 "（可以使用空格占用字节，嫌空格占位可以写一段去空格的代码）
2、请勿输入一些特殊字符，否则会转换出错，例如某些四字节的字符

例如：

咫尺远近却无法靠近的那个人 ↓↓
#cAAFFFF咫#cBBEEFF尺#cCCDDFF远#cDDCCFF近#cEEBBFF却#cFFAAFF无#cFFBBEE法#cFFCCDD靠#cFFDDCC近#cFFEEBB的#cFFFFAA那#cFFEEBB个#cFFDDCC人

  Tatsuki丶梦辰 yyds  ,Tatsuki丶梦辰永远的神！ ↓↓
#cAAFFFF  T#cBBEEFFats#cCCDDFFuki#cDDCCFF丶#cEEBBFF梦#cFFAAFF辰#cEEBBFF yy#cDDCCFFds #cCCDDFF ,T#cBBEEFFats#cAAFFFFuki#cBBEEFF丶#cCCDDFF梦#cDDCCFF辰#cEEBBFF永#cFFAAFF远#cEEBBFF的#cDDCCFF神#cCCDDFF！

I don't wanna be normal no more ↓↓
#cAAFFFFI d#cBBEEFFon'#cCCDDFFt w#cDDCCFFann#cEEBBFFa b#cFFAAFFe n#cFFBBEEorm#cFFCCDDal #cFFDDCCno #cFFEEBBmor

初めてのルーブルは ↓↓
#cAAFFFF初#cBBEEFFめ#cCCDDFFて#cDDCCFFの#cEEBBFFル#cFFAAFFー#cFFBBEEブ#cFFCCDDル#cFFDDCCは

使用场景：
1、使用UI发送消息自动渐变处理，用于制作会员功能等等
2、装13就完了
3、特殊NPC的字幕

可结合脚本API接口使用，例如：Chat:sendSystemMsg("text_b")
text_b为转换后的文本
可通过构建函数来实现快捷调用，例如：

function gradient_color(text_a,color)
  text_b = nil
  longth = #text_a/3
  for i = 1,longth do
    if i <=#mini then
      if text_b == nil then
        text_b = mini[i]..string.sub(text_a,1,3)
      else
        text_b = text_b..mini[i]..string.sub(text_a,3*i-2,3*i)
      end
    elseif i > 6 then
      a = (i-#mini)%10
      if a == 0 then
        a = 2*#mini-2
      end
      if a <= #mini-2 and a > 0 then
        text_b = text_b..mini[#mini-a]..string.sub(text_a,3*i-2,3*i)
      else
        text_b = text_b..mini[a-#mini+2]..string.sub(text_a,3*i-2,3*i)
      end
    end
  end
  Chat:sendSystemMsg("text_b")
end

gradient_color("这是一个用于测试的例子。",12)
输出--> #cAAFFFF这#cBBEEFF是#cCCDDFF一#cDDCCFF个#cEEBBFF用#cFFAAFF于#cFFBBEE测#cFFCCDD试#cFFDDCC的#cFFEEBB例#cFFFFAA子#cFFEEBB。
在聊天框中看到的为渐变色

--]]

--"蓝紫渐变" 星空
mini_color1 = {"#cAAFFFF","#cAAEEFF","#cAADDFF","#cAACCFF","#cAABBFF","#cAAAAFF"}

--"蓝绿渐变"
mini_color2 = {"#cAAFFFF","#cAAFFEE","#cAAFFDD","#cAAFFCC","#cAAFFBB","#cAAFFAA"}

--"粉紫渐变" 
mini_color3 = {"#cFFAAFF","#cEEAAFF","#cDDAAFF","#cCCAAFF","#cBBAAFF","#cAAAAFF"}

--"粉橙渐变"
mini_color4 = {"#cFFAAFF","#cFFAAEE","#cFFAADD","#cFFAACC","#cFFAABB","#cFFAAAA"}

--"黄绿渐变" 
mini_color5 = {"#cFFFFAA","#cEEFFAA","#cDDFFAA","#cCCFFAA","#cBBFFAA","#cAAFFAA"}

--"黄橙渐变" 暖阳
mini_color6 = {"#cFFFFAA","#cFFEEAA","#cFFDDAA","#cFFCCAA","#cFFBBAA","#cFFAAAA"}

--"粉黄渐变" 
mini_color7 = {"#cFFAAFF","#cFFBBEE","#cFFCCDD","#cFFDDCC","#cFFEEBB","#cFFFFAA"}

--"蓝黄渐变" 清爽
mini_color8 = {"#cAAFFFF","#cBBFFEE","#cCCFFDD","#cDDFFCC","#cEEFFBB","#cFFFFAA"}

--"蓝粉渐变" 二次元
mini_color9 = {"#cAAFFFF","#cBBEEFF","#cCCDDFF","#cDDCCFF","#cEEBBFF","#cFFAAFF"}

--"橙紫渐变" 落日余晖
mini_color10 = {"#cFFAAAA","#cEEAABB","#cDDAACC","#cCCAADD","#cBBAAEE","#cAAAAFF"}

--白灰渐变
mini_color11 = {"#cFFFFFF","#cEEEEEE","#cDDDDDD","#cCCCCCC","#cBBBBBB","#cAAAAAA"}

--蓝粉黄渐变   超长二次元渐变
mini_color12 = {"#cAAFFFF","#cBBEEFF","#cCCDDFF","#cDDCCFF","#cEEBBFF","#cFFAAFF","#cFFBBEE","#cFFCCDD","#cFFDDCC","#cFFEEBB","#cFFFFAA"}

colors = {mini_color1,mini_color2,mini_color3,mini_color4,mini_color5,mini_color6,mini_color7,mini_color8,mini_color9,mini_color10,mini_color11,mini_color12}



mini=colors[color]
text_b = nil
longth = #text_a/3
for i = 1,longth do
  if i <=#mini then
    if text_b == nil then
      text_b = mini[i]..string.sub(text_a,1,3)
    else
      text_b = text_b..mini[i]..string.sub(text_a,3*i-2,3*i)
    end
  elseif i > 6 then
    a = (i-#mini)%10
    if a == 0 then
      a = 2*#mini-2
    end
    if a <= #mini-2 and a > 0 then
      text_b = text_b..mini[#mini-a]..string.sub(text_a,3*i-2,3*i)
    else
      text_b = text_b..mini[a-#mini+2]..string.sub(text_a,3*i-2,3*i)
    end
  end
end
print(text_b)
```


## 连锁挖掘

```lua
ore={400,401,402,403,404,405,406,407,445,446,451,452,453,454,455,598,}
tree1,tree2,tree3,tree4,tree5,tree6,tree7,tree8={200,332,333,218},{201,334,335,219},{254,340,341,255},{202,342,343,220},{205,338,339,223},{203},{204},{579}
tree={tree1,tree2,tree3,tree4,tree5,tree6,tree7,tree8}
function chain(event)
  x,y,z,id = event.x,event.y,event.z,event.blockid
  result,id1 = Block:getBlockID(x+1,y,z)
  result,id2 = Block:getBlockID(x-1,y,z)
  result,id3 = Block:getBlockID(x,y+1,z)
  result,id4 = Block:getBlockID(x,y-1,z)
  result,id5 = Block:getBlockID(x,y,z+1)
  result,id6 = Block:getBlockID(x,y,z-1)
  if id >=400 and id <=598 then--矿物模块
    for i = 1,#ore do
      if id == ore[i] then
        if id1 == id then
          Block:destroyBlock(x+1,y,z,true)
        end
        if id2 == id then
          Block:destroyBlock(x-1,y,z,true)
        end
        if id3 == id then
          Block:destroyBlock(x,y+1,z,true)
        end
        if id4 == id then
          Block:destroyBlock(x,y-1,z,true)
        end
        if id5 == id then
          Block:destroyBlock(x,y,z+1,true)
        end
        if id6 == id then
          Block:destroyBlock(x,y,z-1,true)
        end
        return
      end
    end
  end

  if (id >=200 and id <= 343) or id == 579 then--树模块
    b = 0
    for i = 1,#tree do
      for a =1,3 do
        if id == tree[i][a] then
          b = i
          break
        end
      end
      if b ~= 0 then
        break
      end
    end
    if b ~= 0 then
      for i = 1,#tree[b] do
        if id == tree[b][i] then
          for a = 1,3 do
            c = tree[b][a]
            if id1 == c then
              Block:destroyBlock(x+1,y,z,true)
              id1 = true
            end
            if id2 == c then
              Block:destroyBlock(x-1,y,z,true)
              id2 = true
            end
            if id3 == c then
              Block:destroyBlock(x,y+1,z,true)
              id3 = true
            end
            if id4 == c then
              Block:destroyBlock(x,y-1,z,true)
              id4 = true
            end
            if id5 == c then
              Block:destroyBlock(x,y,z+1,true)
              id5 = true
            end
            if id6 == c then
              Block:destroyBlock(x,y,z-1,true)
              id6 = true
            end
          end
          if id1 == true or id2 == true or id3 == true or id4 == true or id5 == true or id6 == true then
            return
          end
        end
      end
    end
  end
end
ScriptSupportEvent:registerEvent([=[Block.Remove]=],chain)
```

## 玩家黑名单

```lua
black_list={}--在此输入黑名单玩家迷你号，多个迷你号可用","隔开
  function onPlayerEnter(e)
    player_id=e["eventobjid"]
    for i=1,#black_list do
      if player_id==black_list[i] then
        Game:msgBox("您处于此地图黑名单，无法游戏")
        World:despawnActor(player_id)
      end
     end
  end
ScriptSupportEvent:registerEvent([=[Game.AnyPlayer.EnterGame]=],onPlayerEnter)
```

## 一键生成圆圈

```lua
StarPainter = {}

function StarPainter:new()
    StarPainter.__index = StarPainter
    local self = setmetatable({}, StarPainter);
    return self;
end

--    此函数用于画圆的每一个点
--  @param x, y 圆的每一个点的位置
--  @param z 圆心z坐标(数学坐标体系)
--  @param cx, cy 圆心x, y坐标(数学坐标体系)
--  @param blockid 方块id,用什么方块画圆
function StarPainter:drawCriclePoint(x, y, z, cx, cy, blockid) 
    Block:setBlockAll(cx + x, z, cy + y, blockid, 0);
    Block:setBlockAll(cx - x, z, cy + y, blockid, 0);
    Block:setBlockAll(cx + x, z, cy - y, blockid, 0);
    Block:setBlockAll(cx - x, z, cy - y, blockid, 0);
    Block:setBlockAll(cx + y, z, cy + x, blockid, 0);
    Block:setBlockAll(cx - y, z, cy + x, blockid, 0);
    Block:setBlockAll(cx + y, z, cy - x, blockid, 0);
    Block:setBlockAll(cx - y, z, cy - x, blockid, 0);
end


--    此函数用于画空心圆
-- @param x, y, z画圆圆心的地方的x, y, z坐标
-- @param blockid 方块id,用什么方块画圆
-- @param r 圆的半径
function StarPainter:drawHollowCricle(x, y, z, blockid, r)    
    local cx = x; local cy = z; z = y;
    -- 代入数学公式, cx, cy是画圆的圆心位置
    
    x = 0; 
    y = r; 
    local d = 1.25 - r;    -- d为判别式    
    StarPainter:drawCriclePoint(x, y, z, cx, cy, blockid);
    
    while (x < y) do
        if (d < 0) then
            d = d + 2 * x + 3;
        else
            d = d + 2 * (x - y) + 5;
            y = y - 1;
        end
        x = x + 1;
        StarPainter:drawCriclePoint(x, y, z, cx, cy, blockid);
    end
    return;
end


--  此函数通过圆的标准方程绘制得成
-- @param x, y, z画圆圆心的地方x, y, z坐标
-- @param blockid 方块id,用什么方块画圆
-- @r 圆的半径
function StarPainter:drawSoildCricle(x, y, z, blockid, r)
    for x1 = x - r, x + r do
        for z1 = z - r, z + r do
            if (math.sqrt( (x1 - x) ^ 2 + (z1 - z) ^ 2 ) < r) then
                Block:setBlockAll(x1, y, z1, blockid, 0);
            end
        end
    end
    return;
end


-- 此函数是drawSoildCricle和drawHollowCricle的综合体
-- @param x, y, z画圆圆心的地方x, y, z坐标
-- @param blockid 方块id,用什么方块画圆
-- @r 圆的半径
function StarPainter:drawFilledCricle(x, y, z, blockid, r)
    StarPainter:drawHollowCricle(x, y, z, blockid, r);
    StarPainter:drawSoildCricle(x, y, z, blockid, r);
end
```

## 一键生成长方体

```lua
function drawFilledCuboid(x0, y0, z0, x1, y1, z1, blockid)
    v_x = 1; v_z = 1; v_y = 1;
    
    if (x0 > x1) then v_x = -1; end
    if (y0 > y1) then v_y = -1; end
    if (z0 > z1) then v_z = -1; end
    for y = y0, y1, v_y do
        for x = x0, x1, v_x do
            for z = z0, z1, v_z do
                Block:setBlockAll(x, y, z, blockid, 0)
            end
        end
    end
end
```




