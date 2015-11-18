/**
 *
 * @author 
 *
 */
class CardsModel {
	public constructor() {
	}
	
    private cardsArr = [];
    private packs = 1;
    private suitsArr = ["spade", "heart", "club", "diamond"];
	
	public init()
	{
        //生成packs副牌
        for(var i = 0;i < this.packs;i++)
        {
            for(var j = 0;j < 4;j++)
            {
                for(var k = 0;k < 13;k++)
                {
                    this.cardsArr.push(
                        {
                            "suit":this.suitsArr[j],
                            "rank":(k+1)
                        }
                    );
                }
            }
        }
        this.cardsArr = this.shuffle(this.cardsArr);
	}
	
	/**
	 * 洗牌
	 */ 
	private shuffle(_arr:Array<Object>):Array<Object>
	{
        if(_arr.length == 0) return _arr;
        var i:number, j:number;
        var _temp: Object;
        i = _arr.length;
        while(--i > 0)
        { 
            j = Math.floor(Math.random() * (i + 1));
            _temp = _arr[i];
            _arr[i] = _arr[j];
            _arr[j] = _temp;
        }
        return _arr;
	}
	
}
