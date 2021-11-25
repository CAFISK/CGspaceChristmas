keyword_list = ["白色","飞鸟","雪花","炉火","夜晚","冬日","街道","手套","结冰","雪人","烟花","圣诞树","红色","绿色","星星","星空","礼物","白雪","圣诞帽","壁炉","麋鹿","绒毛","日历","蛋糕","胡桃夹子","烛台","雪橇","圣歌","火柴","圣诞袜","平安夜","十字架",""];
function HashCode(str)
{
    var hash = 1315423911,i,ch;
    for (i = str.length - 1; i >= 0; i--)
    {
        ch = str.charCodeAt(i);
        hash ^= ((hash << 5) + ch + (hash >> 2));
    }
    return (hash & 0x7FFFFFFF);
}

function rnd(seed)
{
    seed = (seed * 3844066521 + 3316005024) % 2249804527;
    return seed;
}

function Random_Sample(m, len, seed)
{
    m.sort(function()
    {
        seed = rnd(seed);
        return seed / 2249804527 - 0.5;
    });
    return m.slice(0, len);
}

function Generate()
{
    name = document.querySelector("#inputYourName").value;
    seed = rnd(HashCode(name));
    tmp = Array.from(keyword_list);
    keywords = Random_Sample(tmp,3,seed);
    //alert(keywords);
    for(i=1;i<=3;i++){
        selector = "#keyword_" + i;
        document.querySelector(selector).innerHTML = keywords[i-1];
    }
}