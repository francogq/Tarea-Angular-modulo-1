export class DestinoViaje{
    
        private selected: boolean;
        public destinos: string[];
        constructor(public nombre: string,public imagenUrl: string, public votes: number = 0){
            this.destinos=['pileta','desayuno'];
        }
        isSelected(): boolean{
            return this.selected;
        }
        setSelected(s: boolean){
            this.selected=s;
        }
        voteDown() {
            if (this.votes>0){
              this.votes--;}
            }
            voteUp() {
              this.votes++;
            }
            
}
