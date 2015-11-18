/**
 *
 * @author 
 *
 */
class View extends egret.Sprite {
    private controlContainer: egret.Sprite;
    private tableContainer: egret.Sprite;
    private infoContainer: egret.Sprite;
    private infoText: egret.TextField = new egret.TextField;
    private playerView: PlayerView = new PlayerView;
    
    public constructor() {
        super();
        this.stage ? this.init() : this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
	}
	
	private init(event:egret.Event = null):void
	{
        if(event) this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
        
        this.controlContainer = new egret.Sprite();
        this.tableContainer = new egret.Sprite();
        this.infoContainer = new egret.Sprite;
        
        this.addChild(this.controlContainer);
        this.addChild(this.tableContainer);
        this.addChild(this.infoContainer);
        this.tableContainer.y = 100;
        this.controlContainer.y = this.stage.stageHeight - 100;
        this.infoContainer.y = this.tableContainer.y - 25;
        
        this.infoContainer.addChild(this.infoText);
        this.controlContainer.addChild(this.playerView);
        this.playerView.init();
    
        Manager.instance().addEventListener(Events.CHIP_LACK, function(event:Events): void {
            this.infoText.text = "筹码不足";
        }, this);
        
	}
	
	
}
