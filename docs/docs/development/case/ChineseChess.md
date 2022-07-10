# 简易中国象棋人工智能

> 本文记录了如何用简单方式整一个迷你世界的一个中国象棋简易象棋人工智能，此简易人工智能由脚本实现

## 准备开始

为了实现一个简易的中国象棋人工智能，首先我们需要一些知识储备

- 有lua基础，因为实现这个要用到迷你世界的脚本
- 了解一些简单的象棋规则

首先先请想好做这个东西，需要准备什么。
第一，肯定要**有一个象棋棋盘，以及一个方式可以使玩家下棋**，也就是游戏界面。第二，我们还需要**一个简易的人工智能来和玩家对弈**。
游戏界面可以通过迷你世界的方块来模拟一个，就像这样：

![chinesechess](https://s1.ax1x.com/2022/06/18/XLM9mt.png)

**然后我们再写一下脚本，使玩家可以操作象棋棋盘的棋子**，就可以实现玩家下棋了。接着我们需要一个与玩家对弈的简易的人工智能，这将由我们亲自写出来，但是电脑如何下棋呢？

我们是不是应该让这个简易的人工智能**知道他可以下哪些位置**啊，我们还需要**让人工智能知道哪些走法比较好**，最后我们再使这个简易的象棋电脑**如何把最好的走法下出来**，这样就可以实现一个简易的人工智能了！

## 开始操作

根据刚才的一阵头脑风暴，**于是使用Board类来承担游戏面板的责任，玩家下棋的操作，人工智能响应玩家下棋都由他实现。**

首先请自行准备象棋游戏的方块素材，为了方便所有用lua的全局变量储存所有的象棋棋子的id，代码如下：

```lua
R_PAWN = 2023     -- 红兵
R_ROOK = 2021     -- 红车
R_KNIGHT = 2018   -- 红马
R_CANNON = 2017   -- 红炮
R_BISHOP = 2015   -- 红相
R_GUARD = 2012    -- 红仕
R_KING = 2011     -- 红帅

B_PAWN = 2022     -- 黑卒
B_ROOK = 2020     -- 黑车
B_KNIGHT = 2019   -- 黑马
B_CANNON = 2016   -- 黑炮
B_BISHOP = 2014   -- 黑象
B_GUARD = 2013    -- 黑士
B_KING = 2010     -- 黑帅
```

Board是一个类，所以需要构造函数。Board类需要什么成员变量呢？
Board承担游戏面板的角色，维护一个迷你世界的象棋棋盘，因此Board类应该分别储存**棋盘的起始位置s_x,s_z,棋盘结束位置e_x, e_z, 棋盘高度 _y**，这样的成员变量

其次，我们还需要知道当前是红方下棋还是黑方下棋，也就是说轮到谁的回合，我们可用布尔成员变量**isRedTurn储存当前下棋回合**,true表示当前是红方回合，false表示当前是黑方回合

为了提供悔棋功能，我们可以另外准备一个**数组成员变量g_moves，储存游戏的下棋过程**。我们还可以添加一个**latestPosX,latestPosZ来储存上一步棋子移动的位置**！

我们还需要使用一个**二维数组boardtable来储存一个象棋棋盘**，因为之后需要电脑获得所有可行走法，并且我们还规定这个**boardtable\[1]\[1]储存的是象棋棋盘左下角(红方左手边车的位置)的位置，boardtable\[9]\[10]储存的是象棋棋盘右上角（黑方左手边车的位置）的位置**，使用这样的存储方式。

（图片来自网络）

![chinese_chess_start](https://s1.ax1x.com/2022/06/18/XLMC0P.jpg)

Board类的构造函数如下：

```lua
Board = {}

-- Board构造函数
-- @param s_x, s_z 棋盘起始位置
-- @param e_x, e_z 棋盘结束位置
-- @param _y棋盘的高
function Board:new(s_x, s_z, e_x, e_z, _y)
    self.__index = self
    local self = setmetatable({}, self);

    -- 棋盘起始位置s_x,s_z, 
    -- 结束位置 e_x, e_z
    -- 棋盘高度 _y
    self.s_x = s_x; 
    self.s_z = s_z;
    self.e_x = e_x;
    self.e_z = e_z;
    self._y = _y;
    self.g_moves = {}; -- 储存下棋过程
    -- isRedTurn 是否是红方回合
    self.isRedTurn = true;
     -- boardtable棋盘内容
    self.boardtable = {};

    -- latestPosX 最后下棋的x坐标 latestPosZ 最后下棋的z坐标
    self.latestPosX = -1;
    self.latestPosZ = -1;
    self:setDefaultBoard();

    return self;
end

-- 重设Board对象储存的棋盘数组
-- 储存数据为象棋棋盘开局的各棋子位置
function Board:setDefaultBoard()
    self.boardtable = {
        {R_ROOK, 0, 0, R_PAWN, 0, 0, B_PAWN, 0, 0, B_ROOK},
        {R_KNIGHT, 0, R_CANNON, 0, 0, 0, 0, B_CANNON, 0, B_KNIGHT},
        {R_BISHOP, 0, 0, R_PAWN, 0, 0, B_PAWN, 0, 0, B_BISHOP},
        {R_GUARD, 0, 0, 0, 0, 0, 0, 0, 0, B_GUARD},
        {R_KING, 0, 0, R_PAWN, 0, 0, B_PAWN, 0, 0, B_KING},
        {R_GUARD, 0, 0, 0, 0, 0, 0, 0, 0, B_GUARD},
        {R_BISHOP, 0, 0, R_PAWN, 0, 0, B_PAWN, 0, 0, B_BISHOP},
        {R_KNIGHT, 0, R_CANNON, 0, 0, 0, 0, B_CANNON, 0, B_KNIGHT},
        {R_ROOK, 0, 0, R_PAWN, 0, 0, B_PAWN, 0, 0, B_ROOK}
    };
end
```

如果某个位置上没有棋子，存储的0，否则存储的是迷你世界象棋棋子方块对应的id

## 小试身手

我们储存所有棋子的走法存到一个数组里面。因此我们就应把单个棋子的所有走法逐个添加到一个数组，Board:appendPieceMoves函数就实现了这一功能：

```lua
-- 用于向一个数组添加某一棋子的所有走法
-- @param moves 要添加棋子走法的数组
-- @param x,z 被添加的棋子位置
-- @param thisid 被添加棋子的id
function Board:appendPieceMoves(moves, x, z, thisid)
    -- 判断棋子id，来决定添加棋子的所有走法的添加方式
    -- 由于添加红黑方棋子车，马，炮的行走在算法上代码非常相近，
    -- 所以添加棋子车马炮的行走方式不需要区分是哪方棋子的行走方式
    if (thisid == R_ROOK or thisid == B_ROOK) then
        -- 添加棋子车的所有走法
    elseif (thisid == R_KNIGHT or thisid == B_KNIGHT) then
        -- 添加棋子马的所有走法
    elseif (thisid == R_CANNON or thisid == B_CANNON) then
        -- 添加棋子炮的所有走法
    elseif (thisid == R_GUARD) then
        -- 添加棋子仕的所有走法
    elseif (thisid == B_GUARD) then
        -- 添加棋子士的所有走法
    elseif (thisid == R_KING) then
        -- 添加棋子帅的所有走法
    elseif (thisid == B_KING) then
        -- 添加棋子将的所有走法
    elseif (thisid == R_PAWN) then
        -- 添加棋子兵的所有走法
    elseif (thisid == B_PAWN) then
        -- 添加棋子卒的所有走法
    elseif (thisid == R_BISHOP) then
        -- 添加棋子相的所有走法
    elseif (thisid == B_BISHOP) then
        -- 添加棋子象的所有走法
    end
end
```

那么我们就可以用Board:getAllMoves(isRedTurn)成员函数，它返回一个数组，存储了某方玩家可以下棋的所有走法：

```lua
-- RED_ARMY 所有红方棋子的集合
RED_ARMY = {
    [R_PAWN] = 1,
    [R_ROOK] = 1, [R_KNIGHT] = 1, [R_CANNON] = 1, 
    [R_BISHOP] = 1, [R_GUARD] = 1, [R_KING] = 1,
    __index = function() return 0 end
}
setmetatable(RED_ARMY, RED_ARMY)

-- BLACK_ARMY 所有黑方棋子集合
BLACK_ARMY = {
    [B_PAWN] = 1,
    [B_ROOK] = 1, [B_KNIGHT] = 1, [B_CANNON] = 1,
    [B_BISHOP] = 1, [B_GUARD] = 1, [B_KING] = 1
}


-- 获得可以行走的所有走法
-- @param isRedTurn 获取哪方的走法
function Board:getAllMoves(isRedTurn)
    local all_moves = {};
    for i = 1, 9 do
        for j = 1, 10 do
            -- 遍历棋盘上所有存活棋子
            local pieceid = self.boardtable[i][j];
            if (isRedTurn) then
                -- 要获得红方的所有走法，就判断棋子是否属于红方
                -- 然后再决定添加
                if (RED_ARMY[pieceid]) then
                    self:appendPieceMoves(
                        all_moves, i, j, pieceid
                    );
                end
            else
                if (BLACK_ARMY[pieceid]) then
                -- 要获得黑方的所有走法，就判断棋子是否属于黑方
                -- 然后再决定添加
                    self:appendPieceMoves(
                        all_moves, i, j, pieceid
                    );
                end
            end
        end
    end
    return all_moves;
end
```

上面代码逻辑很简单，只是遍历boardtable这个储存棋盘数据的二维数组，决定添加红方棋子还是黑方棋子的所有走法到数组里面。之后用Board:appendPieceMoves把单个棋子的所有走法添加到数组里面去，这样电脑就可以获得所有的可以走的合法步骤了。

但现在Board:appendPieceMoves函数那里并没有添加任何走法进去，于是让我们写一下代码来实现添加走法进去。

## 逐步深入

先从添加最简单的棋子兵，卒的走法开始。兵，卒没有过河前只能向前走一步，过河之后还可以向左向右移动。所以看添加棋子兵，卒的伪代码：

```lua
-- 在添加棋子的走法之前，
-- 由于棋子只能呆在棋盘里面，并且不能吃我方棋子，
-- 我们在添加棋子走法之前，需要做很多判断

if (兵前方的位置没有越界 and 兵前方的棋子不属于我方的棋子) then
    记录"兵向前走一步"的走法
end
if (兵已经过河) then
    if (兵左走一步没有越界 and 兵左边的棋子是敌方棋子) then
        记录"兵向左走一步"的走法
    end
    if (兵右走一步没有越界 and 兵右边的棋子是敌方棋子) then
        记录"兵向右走一步"的走法
    end
end 
```

好像每次添加棋子的走法都需要判断要记录走法的位置是否越界，并且是否吃掉了我方的棋子，非常麻烦。每次记录一个走法都要判断这些东西之后才会记录，为什么不把这个过程封装成函数呢？

于是有了Board:attack函数，用于尝试记录一下棋子走到那里的走法，如果准备记录到那个位置的走法违反规则，就不会记录走法，否则记录下来。

但如何表示一个棋子的行走方式呢？其中一种解决方案，我们可以**用一个table来表示棋子的行走方式**，他有 thisid, killid, s_x, s_z, e_x, e_z这六个属性，**分别储存了被移动棋子的id，移动之后将要吃掉的棋子id,被移动棋子的x坐标,z坐标，被移动棋子移动后的x坐标，z坐标**。如果这个行走方式没有吃掉一个棋子，killid的值就是NO_PIECE,也就是0

Board:attack函数实现如下：

```lua
-- 用于尝试添加一个走法到moves数组里面
-- @param moves 被添加数据的数组
-- @param attack_x, attack_z 移动到的棋子位置
-- @param thisid 被移动棋子的id
-- @return bool 移动棋子移动到的位置是否有棋子存在，或者那个位置越界
function Board:attack(moves, attack_x, attack_z, thisid)
    -- 检测该位置是否越界,越界返回true
    if (attack_x < 1 or attack_x > 9 or attack_z < 1 or attack_z > 10) then
        return true;
    end

    -- 获得该位置棋子id
    local killid = self.boardtable[attack_x][attack_z];    
    -- 判断棋子是否是一队的,阻止吃队友
    if (RED_ARMY[thisid] == RED_AEMY[killid])then
        return true;
    end

    table.insert(moves, 
    {      -- 储存move
        thisid = thisid, killid = killid,
        s_x = self.this_x,  s_z = self.this_z, 
        e_x = attack_x, e_z = attack_z
    });
    if (NO_PIECE == killid) then
        return false; -- 目标位置没有棋子
    end
    -- 否则目标位置是敌方棋子
    return true;
end
```

添加棋子兵，卒的走法方式如下：

```lua
    if (thisid == R_PAWN) then
    -- 添加红方棋子兵的走法
        if (z > 5) then 
        -- 如果兵过河，就尝试使兵左右走
            self:attack(moves, x + 1, z, thisid);
            self:attack(moves, x - 1, z, thisid);
        end
        -- 尝试使兵向前走一步
        self:attack(moves, x, z + 1, thisid);
        return;
    end

    if (thisid == B_PAWN) then
    -- 添加黑方棋子卒的走法
        if (z < 6) then
        -- 如果卒过河，就尝试使兵左右走
            self:attack(moves, x + 1, z, thisid);
            self:attack(moves, x - 1, z, thisid);
        end
        -- 尝试使卒向前走一步
        self:attack(moves, x, z - 1, thisid);
        return;
    end
```

添加棋子仕和士的走法也很好理解了，我们只需要在棋子仕和士在快出九宫的时候阻止他们就可以了，

```lua
    if (thisid == R_GUARD) then -- 红仕
        local not_cross_front = (z < 3) -- 是否出九宫顶部

        if (x > 4) then -- 是否出九宫左侧
            self:attack(moves, x - 1, z - 1, thisid);
            if (not_cross_front) then
                self:attack(moves, x - 1, z + 1, thisid);
            end
        end
        if (x < 6) then -- 是否出九宫右侧
            self:attack(moves, x + 1, z - 1, thisid);
            if (not_cross_front) then
                self:attack(moves, x + 1, z + 1, thisid);
            end
        end
        return;
    end

    if (thisid == B_GUARD) then -- 黑士
        local not_cross_back = (z > 8); -- 是否出九宫顶部

        if (x > 4) then -- 是否出九宫左侧
            self:attack(moves, x - 1, z + 1, thisid);
            if (not_cross_back) then
                self:attack(moves, x - 1, z - 1, thisid);
            end
        end
        if (x < 6) then -- 是否出九宫右侧
            self:attack(moves, x + 1, z + 1, thisid);
            if (not_cross_back) then
                self:attack(moves, x + 1, z - 1, thisid);
            end
        end
        return;
    end
```

添加棋子马的走法非常简单，首先先判断有没有“蹩马腿”，如果没有则可以移动，于是：

```lua
    if (thisid == R_KNIGHT or thisid == B_KNIGHT) then
    -- 添加棋子马的走法
        if self:isFreeSpace(x - 1, z) then -- 判断马脚
            self:attack(moves, x - 2, z + 1, thisid);
            self:attack(moves, x - 2, z - 1, thisid);
        end
        if self:isFreeSpace(x + 1, z) then -- 判断马脚
            self:attack(moves, x + 2, z + 1, thisid);
            self:attack(moves, x + 2, z - 1, thisid);
        end
        if self:isFreeSpace(x, z - 1) then -- 判断马脚
            self:attack(moves, x + 1, z - 2, thisid);
            self:attack(moves, x - 1, z - 2, thisid);
        end
        if self:isFreeSpace(x, z + 1) then -- 判断马脚
            self:attack(moves, x + 1, z + 2, thisid);
            self:attack(moves, x - 1, z + 2, thisid);
        end
        return;
    end
```

这里用了一个新函数，Board:isFreeSpace，这个函数用于判断棋盘上是否有棋子存在，如果没有棋子返回true否则false，如果判断的位置越界了，返回false:

```lua
-- 判断棋盘某个位置是否有棋子存在
-- @return bool 是否有棋子存在
function Board:isFreeSpace(attack_x, attack_z)
    if (attack_x < 1 or attack_x > 9 or attack_z < 1 or attack_z > 10) then
        return false;
    end
    return (NO_PIECE == self.boardtable[attack_x][attack_z]);
end
```

类似的，添加棋子相和象的走法就很好理解了，就和棋子仕一样，在相快过河的时候就阻止棋子过河就可以了，于是：

```lua
    if (thisid == R_BISHOP) then -- 添加红相的走法
        if (z  < 5) then -- 阻止相过河
            if self:isFreeSpace(x + 1, z + 1) then 
            -- 如果有棋子卡住了象眼，阻止飞象
                self:attack(moves, x + 2, z + 2, thisid);
            end
            if self:isFreeSpace(x - 1, z + 1) then 
            -- 如果有棋子卡住了象眼，阻止飞象
                self:attack(moves, x - 2, z + 2, thisid);
            end
        end
        if self:isFreeSpace(x + 1, z - 1) then 
        -- 如果有棋子卡住了象眼，阻止飞象
            self:attack(moves, x + 2, z - 2, thisid);
        end
        if self:isFreeSpace(x - 1, z - 1) then 
        -- 如果有棋子卡住了象眼，阻止飞象
            self:attack(moves, x - 2, z - 2, thisid);
        end
        return;
    end

    if (thisid == B_BISHOP) then -- 添加黑象的走法
        if (z > 6) then -- 阻止象过河
            if self:isFreeSpace(x + 1, z - 1) then 
            -- 检查是否塞象眼
                self:attack(moves, x + 2, z - 2, thisid);
            end
            if self:isFreeSpace(x - 1, z - 1) then 
            -- 检查象眼
                self:attack(moves, x - 2, z - 2, thisid);
            end
        end
        if self:isFreeSpace(x + 1, z + 1) then -- 象眼
            self:attack(moves, x + 2, z + 2, thisid);
        end
        if self:isFreeSpace(x - 1, z + 1) then -- 象眼
            self:attack(moves, x - 2, z + 2, thisid);
        end
        return;
    end
```

## 重头戏

棋子马，相，兵的走法记录都很简单，但是对于车，炮这种棋子，需要记录他们水平或垂直方向移动任意个无阻碍的点，似乎变得困难。有那么多点都需要记录，但是我们怎样知道水平或垂直方向移动任意个无阻碍的点有哪些呢？

对于棋子车，我们以棋子**车的上下左右四个方向，用循环来一个一个的判断有没有棋子阻挡**，如果没有就可以走到那个位置，否则就判断一下那个棋子能不能被我方棋子吃掉，如果能吃掉就记录这个走法，这样就完成了。

作者之前特地准备了一个attack函数，他记录棋子移动那里的走法之后，还有一个布尔类型的返回值，返回true表示那个位置有棋子或者越界，返回false表示那个位置无棋子。于是通过那个返回值，就好办了：

```lua
-- 临时函数AddRookMove,用于添加棋子车的走法
-- @param x,z 棋子自身的位置
-- @param v_x, v_z 一个x轴方向 和 一个z轴方向
local function AddRookMove(x, z, v_x, v_z)
    -- 尝试攻击敌方棋子
    for i = 1, 9 do
       -- 与方向v_x, v_z 运算获得应该攻击的位置
       local l_x = x + i * v_x;
       local l_z = z + i * v_z;
       -- 判断那个位置是否有棋子或者越界，
       -- 如果有棋子或越界，就停止记录
       -- 这样就可以得到所有 水平或垂直方向移动任意个无阻碍的点
       if (self:attack(moves, l_x, l_z, thisid) ) then
           return;
        end
   end
   return;
end

if (thisid == R_ROOK or thisid == B_ROOK) then
   -- 添加棋子车的走法
   AddRookMoves(x, z, 1, 0);
   AddRookMoves(x, z, -1, 0);
   AddRookMoves(x, z,  0, 1);
   AddRookMoves(x, z,  0, -1);
   return;
end
```

对于棋子炮的走法，我们需要找炮架，同样是上下左右四个方向寻找无阻碍的点，但是**找到之后我们需要再次使用这个方法，寻找炮应该打击的点**，这样就轻松解决了：

```lua
-- 临时函数AddRookMove,用于添加棋子炮的走法
-- @param x,z 棋子自身的位置
-- @param v_x, v_z 一个x轴方向 和 一个z轴方向
local function AddCannonMoves(x, z, v_x, v_z)
    for i = 1, 9 do
        -- 与方向v_x, v_z 运算获得应该攻击的位置
        local l_x = x + i * v_x;
        local l_z = z + i * v_z;
        -- 若攻击的位置没有空位(找到了炮架)
        if (not self:isFreeSpace(l_x, l_z) ) then
            -- 尝试攻击一个棋子
            for j = i + 1, 9 do
                l_x = x + j * v_x;
                l_z = z + j * v_z;
                -- 若找到了可以攻击的地方,就尝试攻击,然后返回
                if (not self:isFreeSpace(l_x, l_z) ) then
                    self:attack(moves, l_x, l_z, thisid);
                    return;
                end
            end
        -- 否则攻击空位置
        else
            self:attack(moves, l_x, l_z, thisid);
        end
    end
end

if (thisid == R_CANNON or thisid == B_CANNON) then
   -- 添加棋子炮的走法
   AddCannonMoves(x, z, 1, 0, false);
   AddCannonMoves(x, z, -1, 0, false);
   AddCannonMoves(x, z,  0, 1, false);
   AddCannonMoves(x, z,  0, -1, false);
   return;
end
```

之后还剩棋子帅和将的走法，和棋子仕一样，在帅快出九宫的时候限制一下帅的行走即可。还有白脸将规则，其实这也不难。

```lua
if (thisid == R_KING) then -- 红帅
        for i = 1, 9 do -- 白脸将
            if (not self:isFreeSpace(x, z + i) ) then
                if (self.boardtable[x][z + i] == B_KING) then
                    self:attack(moves, x, z + i, thisid);
                end
                break;
            end
        end

        self:attack(moves, x, z - 1, thisid);
        if (x > 4) then -- 是否出九宫左侧
            self:attack(moves, x - 1, z, thisid);
        end
        if (x < 6) then -- 是否出九宫右侧
            self:attack(moves, x + 1, z, thisid);
        end
        if (z < 3) then -- 是否出九宫顶部
            self:attack(moves, x, z + 1, thisid);
        end
        return;
    end

    if (thisid == B_KING) then -- 黑将
        for i = 1, 9 do -- 白脸将
            if (not self:isFreeSpace(x, z - i) ) then               
                if (self.boardtable[x][z + i] == R_KING) then
                    self:attack(moves, x, z - i, thisid);
                end
                break;
            end
        end

        self:attack(moves, x, z + 1, thisid);
        if (x > 4) then -- 是否出九宫左侧
            self:attack(moves, x - 1, z, thisid);
        end
        if (x < 6) then -- 是否出九宫右侧
            self:attack(moves, x + 1, z, thisid);
        end
        if (z > 8) then -- 是否出九宫顶部
            self:attack(moves, x, z - 1, thisid);
        end
        return;
    end
```

通过上述步骤，就完成了获取某一方所有可行走法的操作。

## 不断前进

之后提供Board:doMove(move)函数，让一步走法可以表现在棋盘上，参数move是一个描绘象棋走法的table，调用这个函数，电脑就可以把他的下棋表现在游戏里面了：

```lua
-- 用于在游戏中真正的走棋
-- @param move 棋子的走法
function Board:doMove(move)
    -- 调用这个函数会在迷你世界的象棋棋盘下一步棋
    -- 调这个函数会播放下棋特效
    
    -- 在位置上取消先前下棋的特效
    World:stopEffectOnPosition(self.latestPosX, 
        self._y, elf.latestPosZ, 1170, 0.5)
    
    local diction = DICTION_BLACK;
-- 设置棋子方向
-- 红棋的方向和黑棋的方向均已确定, 只需简单的判断来确定棋子方向
    if (self.isRedTurn) then
        diction = DICTION_RED;
    end

    -- 将储存在对象中的走法在实际局面中表现出来
    -- beg_x, beg_z 被移动棋子x坐标, z坐标
    -- end_x, end_z 移动到的位置x坐标, z坐标
    local beg_x = self.s_x + move.s_x - 1;
    local beg_z = self.s_z + move.s_z - 1;
    local end_x = self.s_x + move.e_x - 1;
    local end_z = self.s_z + move.e_z - 1;

    self.latestPosX = beg_x;
    self.latestPosZ = beg_z;
    -- 模拟移动棋子
    Block:setBlockAll(end_x, self._y, end_z, move.thisid, diction);
    -- 摧毁原先位置的棋子
    Block:destroyBlock(beg_x, self._y, beg_z, false);
    -- 播放下棋的特效，便于玩家发现下棋位置
    World:playParticalEffect(self.latestPosX, 
        self._y, self.latestPosZ, 1170, 0.5);
    
    -- Board:makeMove
    -- 这个函数用于储存下棋过程，因为可能玩家想悔棋
    self:makeMove(move);
    
    -- 转换回合
    self.isRedTurn = not self.isRedTurn;
end


-- 用于AI储存棋局的走棋
function Board:makeMove(move)
    -- 储存下棋
    table.insert(self.g_moves, move);
    self.boardtable[move.s_x][move.s_z] = NO_PIECE;
    self.boardtable[move.e_x][move.e_z] = move.thisid;
end
```

悔棋函数 Board:undoMove()：

```lua
-- 用于在游戏中真正的悔棋
function Board:undoMove()
    -- 获得上一次走的棋
    local move = self.g_moves[#self.g_moves];
    -- 获得移动棋子的方向 diction
    -- 获得被吃掉棋子的方向 k_diction
    local diction = DICTION_BLACK;
    local k_diction = DICTION_RED;

    if (self.isRedTurn) then
        diction = DICTION_RED;
        k_diction = DICTION_BLACK;
    end

    -- 将悔棋结果表现出来
    -- beg_x, beg_z 被移动棋子x坐标, z坐标
    -- end_x, end_z 移动到的位置x坐标, z坐标
    local beg_x = self.s_x + move.s_x - 1;
    local beg_z = self.s_z + move.s_z - 1;
    local end_x = self.s_x + move.e_x - 1;
    local end_z = self.s_z + move.e_z - 1; 

    -- 摆放棋子到移动之前的位置
    Block:setBlockAll(beg_x, self._y, beg_z, move.thisid, diction);
    if ( move.killid == NO_PIECE ) then                 -- 如果最近的下棋没有吃掉棋子，把原先位置的棋子摧毁即可
        Block:destroyBlock(end_x, self._y, end_z, false);
    else
    -- 否则使被吃掉的棋子方块放回棋盘上
        Block:setBlockAll(end_x, self._y, end_z, move.killid, k_diction);
    end  

    -- 删去最近的走棋记录
    self:unmakeMove();
    -- 游戏回合转换
    self.isRedTurn = not self.isRedTurn;
end
```

接下来，作者用Board:doGameLoop()函数使人机对局开启，调用这个函数电脑开始与玩家对弈。

```lua
-- 用于使外界进行交互下棋
function Board:doGameLoop()
    local turn_moves = {};
    -- turn_moves用于储存玩家回合的选择棋子
    
    -- 监听事件玩家点击方块,以此来模拟移动棋子,选择棋子的效果
    ScriptSupportEvent:registerEvent("Player.ClickBlock", function(e)
        -- 判断电脑是否正在思考
        if (self.isThinking) then
            Chat:sendSystemMsg("电脑正在思考")
            return;
        end
        -- 判断点击位置是否出界
        if (self.s_x > e.x or self.s_z > e.z or 
           self.e_x < e.x or self.e_z < e.z) then
            return;
        end

        -- 迷你世界的坐标转成棋盘所用的坐标体系
        local real_x = e.x - self.s_x + 1;
        local real_z = e.z - self.s_z + 1;

        -- 使玩家选择棋子如果他选择正确的棋子, 双重检测,以防外挂
        if (VAL[e.blockid] < 0 and 
            self.boardtable[real_x][real_z] == e.blockid) then
            Chat:sendSystemMsg("您已选中棋子");
            turn_moves = {};
            self:appendPieceMoves(
                turn_moves, real_x, real_z, e.blockid
            );
            return;
        end

        -- 判断玩家点击位置是否是可以下棋的地方
        for key, move in ipairs(turn_moves) do
            if (move.e_x == real_x and move.e_z == real_z) then
                -- 玩家下棋
                self:doMove(move);
                turn_moves = {};
                -- 使电脑下棋
                self:letComputerMove();
                return;
            end
        end

    end);
end
```

上面调用了Board:letComputerMove函数来使电脑下棋，但是目前还没有实现，于是：

```lua
-- 用于AI下棋
function Board:letComputerMove()
    self.isThinking = true;
    -- Board:getBestMoves()是获得某方可以下的最好的走法的函数
    -- 目前没有实现，在下面的内容会解释这个函数的实现方式
    --local best_moves = self:getBestMoves(self.isRedTurn);
    
    -- 目前让电脑下棋，只是让电脑获得所有电脑可以的走法
    -- 然后随机选择一个来下，因此，目前电脑的技术并不强
    local best_moves = self:getAllMoves(self.isRedTurn);
    self:doMove(best_moves[math.random(1, #best_moves) ]);
    self.isThinking = false;
end
```

拷贝代码到游戏运行。现在这个简易电脑只是从所有可行走法随机选一种，太逊了。

## 考虑一步的人工智能

电脑的优势在于强大的计算能力，虽然电脑不知道怎么走合适，但是她有强大的计算能力，能够快速计算，非常快的模拟出很多情况，之后再决定走哪步。就让我们开始尝试先整一个简单的只会考虑一步的人工智能看看吧！

**提供函数Board:getBestMoves(isRedTurn)，用于使电脑获得所有的最好的可行的走法**，返回值是一个数组，参数isRedTurn是布尔类型，如果为true获取红方所有的最好走法，为false就获取黑方所有最好走法。我们人下棋的时候，我们决定走哪步比较好，**并不是随随便便就可以知道的，总是模拟对方和我方可能会怎样走棋，最后分析分析，再做出决定**，其实这个简易的象棋人工智能也是一样的。

因此，我们可以大致的写出像这样的伪代码，目前只考虑获得黑方最好好走法的情况：

```lua
function Board:getAllMoves(isRedTurn)
    -- 获得可行的所有走法
    local all_moves = self:getAllMoves(false);
    --  获得最好的走法
    local best_moves = 从所有走法中分析出得到的最好的走法;
    return best_moves;
end
```

关键是电脑如何分析怎样走最好呢？

不知道各位曾经是否看过象棋入门教程的书，书中应该讲过**分析局势的其中一种方式就是给每个棋子打分**，然后根据分值决定如何下棋，再决定走哪步棋。**当然还有别的更好的更合理的分析方法**。

根据刚才算分的思想，我们可以弄出一个棋力表，也可以尝试给不同棋子赋不同的棋力，但是无论如何，一般棋子帅和将的棋力永远是最高的，其次是车，再到炮和马。用来储存每个棋子的棋力，然后就可以算分了，代码如下：

```lua
VAL = {  -- 棋子的棋力
    [R_PAWN] = -1,
    [R_ROOK] = -9, [R_KNIGHT] = -4, [R_CANNON] = -5,
    [R_BISHOP] = -2, [R_GUARD] = -2, [R_KING] = -100000,

    [B_PAWN] = 1,
    [B_ROOK] = 9, [B_KNIGHT] = 4, [B_CANNON] = 5,
    [B_BISHOP] = 2, [B_GUARD] = 2, [B_KING] = 100000,
    __index = function() return 0 end
}
setmetatable(VAL, VAL)
```

之后就可以弄出一个评估函数Board:calcScore(isRedTurn)，它通过返回一个数值来评估当前局势。刚才的棋力表故意把红方所有棋子的棋力弄成负数，黑方所有棋子棋力为正数，这样我们只需把场上所有棋子的棋力相加，就可以评估到当前局势了

```lua
function Board:calcScore()
    local cur_score = 0;
    
    -- 遍历，然后获得棋盘上所有棋子
    for i = 1, 9 do
        for j = 1, 10 do
            local pieceid = self.boardtable[i][j];
            cur_score = cur_score + VAL[pieceid];
        end
    end
    
    return cur_score;
end
```

分析最好的走法，得到的评估局势的分数是不是越高啊，所以一个获得最好的一步下棋，大致可以分为下列的步骤：

1. 获得所有可行走法，
2. 假装地尝试走每一步棋，
3. 假装走棋之后，获得走之后的局势评估分数，因为分数越高局势越好，所以还要比较每步棋之后的局势分数，获得最大的一个，并储存最好的走法
4. 再假装地撤销那步走棋

然后我们就可以写出可以思考一步的简易的人工智能了：

```lua
function Board:getBestMoves(isRedTurn)
    -- 储存最好的走法
    local best_moves = {};
    -- 储存最好的分数
    local best_score = -1000000;
    
    -- 1. 获得所有可行的走法
    local all_moves = self:getAllMoves();

    -- 遍历所有可以走的下法
    for key, move in ipairs(all_moves) do
        -- 2.假装地尝试走每步棋
        self:makeMove(move)
        -- 3.假装走之后获得走之后的分数，从中取最大值并储存
        local cur_score = self:calcScore();
        if (cur_score > best_score) then
            best_moves = {move}
            best_score = cur_score
        elseif (cur_score == best_score) then
           table.insert(best_moves, move) 
        end
        -- 4.撤回那步走棋
        self:unmakeMove();
    end
    -- 返回结果
    return best_moves;
end
```

接下来即可拷贝脚本到游戏，可以看到有改变了。

## 步入正轨

我们都知道，电脑有强大的计算能力。如果各位曾经和你的亲朋好友下棋，无论是围棋，象棋，五子棋，斗兽棋，如果你总是走得很好，你有时是不是思考对方会怎么下，之后你会怎么下，然后对方再怎么下，是不是这样啊？

但是对方一般都不是会让你轻易下赢它的，他总是走对你不利的棋，走对他有利的棋；你也总是走对他不利的棋，对你有利的棋。

换句话说就是**你走的棋，局面分数总是越来越高，他每次走，局面分数不出意外总是越来越低，**无论如何你还是期望他走的棋对于你来说没有什么致命影响，虽然局面分数开始变低。但是既然这样，如果我们在走之前先预判到对方的预判，尽管对方仍然走对你不利的棋，但是你经过用心思考，**选择接受坏结果中相对较小的，并不是放任不管**，有这样想法的人工智能，难道不会是更聪明啊！

所以我们只需要在第一步**假装走一步棋之后，再假装使得对手走一步对于对手来说最好的棋，然后获得别人的分数，再从获得的分数中选择对于我们来说最有利的**。根据这个思想，于是我们便可以弄出可以走两步的人工智能：

```lua
-- 所谓的帮对手假装走棋的函数
function Board:getHisThoughts()
    -- 储存最小的分数
    local min_score = 1000000;
    
    -- 获得所有可行的走法
    local all_moves = self:getAllMoves(true);

    -- 遍历所有可以走的下法
    for key, move in ipairs(all_moves) do
        self:makeMove(move)
        -- 假装走之后获得走之后的评估分数，获得最小的，并储存
        local cur_score = self:calcScore();
        if (cur_score < min_score) then
           min_score = cur_score
        end
        -- 撤回那步走棋
        self:unmakeMove();
    end
    return min_score;
end


-- 修改原先的getBestMoves函数
function Board:getBestMoves(isRedTurn)
    local best_moves = {};
    local best_score = -1000000;
    
    local all_moves = self:getAllMoves(false);
    for key, move in ipairs(all_moves) do
        self:makeMove(move)
        
        local cur_score = self:getHisThoughts();
        if (cur_score > best_score) then
            best_moves = {move}
            best_score = cur_score
        elseif (cur_score == best_score) then
           table.insert(best_moves, move) 
        end
        self:unmakeMove();
    end
    return best_moves;
end
```

这样就完成了！再次拷贝脚本到游戏，可以看到更好的效果！

## 考虑n步的人工智能！

走两步的简易人工智能已经解决完毕了，根据上方的思维，如果我们一直反复地思考我方怎么下棋，对方怎么下，我方怎么下，是不是就可以弄出考虑n步的人工智能了啊？

在结合刚才的思路，我们不难发现，在我们使简易电脑模拟思考的时候，**如果模拟我方走棋，总是想办法走局面分数更高的棋；如果模拟对方走棋，总是想办法走局面分数更低的棋。**如果我们一直反复这样思考直到游戏结束，这样就完成了。

很遗憾按照现在计算机的能力，这个并不能很好的实现。**但毋庸置疑的是这个简易人工智能思考的深度越大，他越聪明**。接下来，请看走n步人工智能的代码：

```lua
-- 所谓的模拟我方思考的函数
function Board:getMyThoughts(deepth)
    -- 如果探索深度小于0，就计算当前局面分数，
    -- 否则思考对方如何应对
    if (deepth < 0) then 
        return self:calcScore()
    end
    
    local max_score = -1000000;
    local all_moves = self:getAllMoves(false);

    for key, move in ipairs(all_moves) do
        self:makeMove(move)
        
        local cur_score = self:getHisThoughts(deepth - 1);
        -- 搜索深度自减1
        if (cur_score > max_score) then
           max_score = cur_score
        end
        self:unmakeMove();
    end
    return max_score;
end


-- 所谓的帮对手假装走棋的函数，其实也就是模拟对方思考的函数
function Board:getHisThoughts(deepth)
    if (deepth < 0) then 
        return self:calcScore()
    end
    
    local min_score = 1000000;
    local all_moves = self:getAllMoves(true);

    for key, move in ipairs(all_moves) do
        self:makeMove(move)
        -- 搜索深度自减1
        local cur_score = self:getMyThoughts(deepth - 1);
        if (cur_score < min_score) then
           min_score = cur_score
        end
        self:unmakeMove();
    end
    return min_score;
end


-- 再次修改原先的getBestMoves函数
function Board:getBestMoves(isRedTurn, deepth)
    if (deepth < 0) then 
        return self:calcScore()
    end
    local best_moves = {};
    local best_score = -1000000;
    local all_moves = self:getAllMoves(false);
    
    for key, move in ipairs(all_moves) do
        self:makeMove(move)
        
        local cur_score = self:getHisThoughts(deepth - 1);
        if (cur_score > best_score) then
            best_moves = {move}
            best_score = cur_score
        elseif (cur_score == best_score) then
           table.insert(best_moves, move) 
        end
        self:unmakeMove();
    end
    return best_moves;
end
```

上面的三个函数都添加了新的参数deepth，这个参数将决定这个简易人工智能的思考深度。再次拷贝脚本到游戏，可以看到她更聪明了。这样就完成了一个简易的象棋人工智能了！

文章到此结束，感谢您的阅读！


> 作者 吉魂幽
>
> 迷你号 1125833883
>
> ![logo](https://s1.ax1x.com/2022/06/18/XLMPTf.png)