import IPanel from './IPanel'
import IPanelItem from './IPanelItem'
import PanelButton from './PanelButton'
import Toggle from './Toggle'
import Tray from './Tray'


class Panel implements IPanel
{
  orientation: string = "top";
  /**
   * percentage of the panel's width in accordance with the screen's width
   */
  width: number = 100;
  height: number = 35;
  color: string = "red";
  elem: HTMLElement;
  left_tray: Tray;
  right_tray: Tray;

  onclick()
  {
    console.log("You clicked the panel");
  }

  leftclick()
  {
  
  }

  rightclick()
  {
  
  }

  render(): HTMLElement
  {
    return this.elem;
  }

  update(event: MouseEvent)
  {
    // update all items in left tray
    // update all items in right tray
  
    this.elem.style.width =`${this.width}%`;
    this.elem.style.height = `${this.height}px`;
    this.elem.style.top = `0`;
    this.elem.style.left = `0`; 
    this.elem.style.backgroundColor = `${this.color}`; 
  }

  constructor()
  {
    this.elem = document.createElement('div');
  
    // attach new elem to root just under the header
    let fns: Toggle = {
      open: function() {
        let nelem: HTMLElement = document.createElement('div');
        nelem.id = `leftPanelMenu`;
        nelem.style.width = `200px`;
        nelem.style.height = `200px`;
        nelem.style.backgroundColor = `black`;
        nelem.style.position = `absolute`;
        nelem.style.left = `0`;
        nelem.style.top = `36px`;
        document.getElementById("root").appendChild(nelem);
        console.log("left open");
     },
     close: function() {
        document.getElementById("root")
          .removeChild(document.getElementById("leftPanelMenu"));
        console.log("left close");
      }
    };
  
    this.left_tray = new Tray();
    this.left_tray.additem(new PanelButton(33, 33, "yellow",  fns));
  
    // just print something
    let fns2: Toggle = {
      open: function() {console.log("right open")},
      close: function() {console.log("right close")}
    };
  
    this.right_tray = new Tray();
    this.right_tray.additem(new PanelButton(33, 33, "yellow", fns2));
  
    var lt = document.createElement('div');
    lt.style.float = "left";
    lt.appendChild(this.left_tray.render());
  
    var rt = document.createElement('div');
    rt.style.float = "right";
    rt.appendChild(this.right_tray.render());
  
    this.elem.appendChild(lt);
    this.elem.appendChild(rt);
  
    this.update(null);
  }

  addtotray(item: IPanelItem)
  {
    this.right_tray.additem(item);
  }

}

export default Panel;
