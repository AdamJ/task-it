import{b as o,n as d,t as h,r as y,x as n,i as C}from"./index-DQ-E6myY.js";import"./mana-icon-BpBL9zAu.js";var _=Object.defineProperty,E=Object.getOwnPropertyDescriptor,w=(e,t,s,l)=>{for(var a=l>1?void 0:l?E(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=(l?i(t,s,a):i(a))||a);return l&&a&&_(t,s,a),a};let m=class extends y{constructor(){super(...arguments),this.players=[],this.newPlayer="",this.errorMessage=""}addPlayer(){if(console.log("addPlayer called"),this.newPlayer&&this.validatePlayerName(this.newPlayer)){this.dispatchEvent(new CustomEvent("player-added",{detail:this.newPlayer})),this.newPlayer="";const e=this.shadowRoot.querySelector("sl-input");e&&(e.helpText="")}else{const e=this.shadowRoot.querySelector("sl-input");e&&(e.helpText=this.errorMessage)}}handleInputChange(e){const t=e.target;this.newPlayer=t.value;const s=this.shadowRoot.querySelector("sl-input");s&&(this.validatePlayerName(this.newPlayer)?s.helpText="":s.helpText=this.errorMessage)}validatePlayerName(e){const t=/^[a-zA-Z0-9]+$/.test(e);return console.log("isValid:",t),t?(this.errorMessage="",!0):(this.errorMessage="Enter a Name containing only letters or numbers with no spaces or special characters.",!1)}removePlayer(e){this.dispatchEvent(new CustomEvent("remove-player",{detail:e}))}clearAllPlayers(){this.dispatchEvent(new CustomEvent("clear-all-players"))}render(){return n`
      <sl-card>
        <div slot="header">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            Player Setup
            <sl-tooltip content="Clear Player List">
              <sl-button label="clear player list" variant="warning" outline @click=${this.clearAllPlayers}>
                <sl-icon library="default" name="trash-fill" label="Clear Standings"></sl-icon>
              </sl-button>
            </sl-tooltip>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; grid-gap: 1rem;">
          <form class="input-validation-custom">
            <sl-input
              .value=${this.newPlayer}
              @sl-input=${this.handleInputChange}
              spellcheck="true"
              name="name"
              label="Name"
              required
              clearable
              autocomplete="off"
              help-text=${this.errorMessage}
              class="player-input"
            >
              <sl-icon library="default" name="person" slot="prefix"></sl-icon>
            </sl-input>
            <br />
            <sl-button type="button" variant="primary" outline @click=${this.addPlayer} class="larger-icon">
              <sl-icon library="default" slot="prefix" name="person-fill-add"></sl-icon>
              Add Player
            </sl-button>
          </form>
          <p><strong>Players</strong></p>
          <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: flex-start; grid-gap: .5rem; width: 100%;">
            ${this.players.map(e=>n`
              <sl-tag removable @sl-remove=${()=>this.removePlayer(e)}>
                ${e}
              </sl-tag>
            `)}
          </div>
        </div>
      </sl-card>
      <style>
        sl-card {
          width: 100%;
        }
        .player-input::part(form-control-help-text) {
          color: var(--sl-color-danger-600);
        }
        .player-input::part(form-control-help-text)[attr="All fixed!"] {
          color: var(--sl-color-success-600);
        }
      </style>
      `}};w([d({type:Array})],m.prototype,"players",2);w([o()],m.prototype,"newPlayer",2);w([o()],m.prototype,"errorMessage",2);m=w([h("player-input")],m);var D=Object.defineProperty,H=Object.getOwnPropertyDescriptor,f=(e,t,s,l)=>{for(var a=l>1?void 0:l?H(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=(l?i(t,s,a):i(a))||a);return l&&a&&D(t,s,a),a};let u=class extends y{constructor(){super(...arguments),this.players=[],this.player1="",this.player2="",this.winner="draw"}recordMatch(){if(this.player1&&this.player2&&this.player1!==this.player2){let e;this.winner==="draw"?e="draw":this.winner===this.player1?e="win":e="loss",this.dispatchEvent(new CustomEvent("match-recorded",{detail:{player1:this.player1,player2:this.player2,result:e,winner:this.winner}}))}}handlePlayer1Change(e){const t=e.target;this.player1=t.value,(this.winner===this.player2||this.winner===this.player1)&&(this.winner="draw")}handlePlayer2Change(e){const t=e.target;this.player2=t.value,(this.winner===this.player1||this.winner===this.player2)&&(this.winner="draw")}handleWinnerChange(e){const t=e.target;this.winner=t.value==="draw"?"draw":t.value}render(){const e=this.players.filter(r=>r.name!==this.player2),t=this.players.filter(r=>r.name!==this.player1),s=this.player1!==""&&this.player2!=="",l=this.player1===""?"Player 1":this.player1,a=this.player2===""?"Player 2":this.player2;return n`
      <form>
        <sl-select
          value=${this.player1}
          @sl-change=${this.handlePlayer1Change}
          label="Player 1"
          clearable
        >
          <sl-option value="">Select a player</sl-option>
          ${e.map(r=>n`<sl-option value=${r.name}>${r.name}</sl-option>`)}
        </sl-select>
        <br />
        <sl-select
          value=${this.player2}
          @sl-change=${this.handlePlayer2Change}
          label="Player 2"
          clearable
        >
          <sl-option value="">Select a player</sl-option>
          ${t.map(r=>n`<sl-option value=${r.name}>${r.name}</sl-option>`)}
        </sl-select>
        <br />
        <sl-radio-group
          size="medium"
          label="Select a winner"
          name="winner"
          @sl-change=${this.handleWinnerChange}
          value="${this.winner}"
          aria-label="Win selector group"
        >
          <sl-radio-button
            value=${this.player1}
            ?disabled="${!s}"
            aria-label="select for player one"
          >
            ${l}
          </sl-radio-button>
          <sl-radio-button
            value=${this.player2}
            ?disabled="${!s}"
            aria-label="select for player two"
          >
            ${a}
          </sl-radio-button>
          <sl-radio-button
            value="draw"
            ?disabled="${!s}"
            aria-label="select for a draw"
          >
            Draw
          </sl-radio-button>
        </sl-radio-group>
        <br />
        <sl-button variant="success" outline @click=${this.recordMatch} ?disabled=${!s}>
          Record Result</sl-button>
      </form>
    `}};f([d({type:Array})],u.prototype,"players",2);f([o()],u.prototype,"player1",2);f([o()],u.prototype,"player2",2);f([o()],u.prototype,"winner",2);u=f([h("match-input")],u);var I=Object.defineProperty,j=Object.getOwnPropertyDescriptor,x=(e,t,s,l)=>{for(var a=l>1?void 0:l?j(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=(l?i(t,s,a):i(a))||a);return l&&a&&I(t,s,a),a};let v=class extends y{constructor(){super(...arguments),this.standings=[]}render(){return n`
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Draws</th>
            <th>Points</th>
            <th>Win Percentage</th>
          </tr>
        </thead>
        <tbody>
          ${this.standings.map(e=>n`
            <tr>
              <td>${e.name}</td>
              <td>${e.wins}</td>
              <td>${e.losses}</td>
              <td>${e.draws}</td>
              <td>${e.points}</td>
              <td>${e.winPercentage||0}</td>
            </tr>
          `)}
        </tbody>
      </table>
    `}};v.styles=C`
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid var(--sl-color-neutral-700);
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: var(--sl-color-neutral-200);
    }
    // tbody tr:first-of-type {
    //   background-color: var(--sl-color-primary-800);
    //   color: var(--sl-color-neutral-50);
    // }
    tbody tr:nth-of-type(even) {
      background-color: var(--sl-color-neutral-100);
    }
  `;x([d({type:Array})],v.prototype,"standings",2);v=x([h("standings-display")],v);var R=Object.defineProperty,A=Object.getOwnPropertyDescriptor,$=(e,t,s,l)=>{for(var a=l>1?void 0:l?A(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=(l?i(t,s,a):i(a))||a);return l&&a&&R(t,s,a),a};let g=class extends y{constructor(){super(...arguments),this.match=null,this.isOpen=!1,this.editedWinner="draw"}open(e){this.match=e,this.editedWinner=e.winner,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}confirm(){if(this.match){let e;this.editedWinner==="draw"?e="draw":this.editedWinner===this.match.player1?e="win":e="loss",this.dispatchEvent(new CustomEvent("match-edited",{detail:{...this.match,result:e,winner:this.editedWinner}})),this.close()}}handleWinnerChange(e){const t=e.target;this.editedWinner=t.value==="draw"?"draw":t.value}render(){return!this.isOpen||!this.match?n``:n`
      <sl-dialog
        label="Edit Results"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p style="text-align: center;">
          <strong>Matchup:</strong>
          <br />
          <span style="font-size: 2rem;">${this.match.player1} vs ${this.match.player2}</span>

        </p>
        <div style="text-align: center;">
        <sl-radio-group
          size="medium"
          label="Select a winner"
          name="winner"
          @sl-change=${this.handleWinnerChange}
          value="${this.editedWinner}"
        >
          <sl-radio-button
            value=${this.match.player1}
          >
            ${this.match.player1}
          </sl-radio-button>
          <sl-radio-button
            value=${this.match.player2}
          >
            ${this.match.player2}
          </sl-radio-button>
          <sl-radio-button
            value="draw"
          >
            Draw
          </sl-radio-button>
        </sl-radio-group>
        </div>
        <sl-button slot="footer" variant="neutral" outline @click=${this.close}>
          Cancel
        </sl-button>
        <sl-button slot="footer" variant="success" @click=${this.confirm}>
          Update
        </sl-button>
      </sl-dialog>
      <style>
        sl-dialog::part(header-actions) {
          display: none;
        }
        .larger-icon::part(prefix) {
          font-size: 1.125rem;
        }
      </style>
    `}};$([d({type:Object})],g.prototype,"match",2);$([d({type:Boolean})],g.prototype,"isOpen",2);$([o()],g.prototype,"editedWinner",2);g=$([h("edit-modal")],g);var N=Object.defineProperty,W=Object.getOwnPropertyDescriptor,M=(e,t,s,l)=>{for(var a=l>1?void 0:l?W(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=(l?i(t,s,a):i(a))||a);return l&&a&&N(t,s,a),a};let P=class extends y{constructor(){super(...arguments),this.matchHistory=[]}editMatch(e){this.dispatchEvent(new CustomEvent("edit-match",{detail:e}))}getPlayerBadgeVariant(e,t){return t.winner==="draw"?"neutral":t.winner===e?"success":"danger"}getPlayerIconVariant(e,t){return t.winner==="draw"?"bookmarks":t.winner===e?"trophy":"emoji-frown"}getPlayerResultString(e,t){return t.winner==="draw"?"draw":t.winner===e?"win":"loss"}render(){return n`
      <sl-menu>
        ${this.matchHistory.map((e,t)=>n`
            <sl-menu-item>
              <sl-badge
                pill
                variant="${this.getPlayerBadgeVariant(e.player1,e)}"
                style="width: 3rem;"
              >
                <sl-icon name="${this.getPlayerIconVariant(e.player1,e)}"></sl-icon>
                <span style="padding-left: 2px;">${this.getPlayerResultString(e.player1,e)}</span>
              </sl-badge>
                &nbsp; ${e.player1} vs
              <sl-badge
                pill
                variant="${this.getPlayerBadgeVariant(e.player2,e)}"
                style="width: 3rem;"
              >
              <sl-icon name="${this.getPlayerIconVariant(e.player2,e)}"></sl-icon>
                <span style="padding-left: 2px;">${this.getPlayerResultString(e.player2,e)}</span>
              </sl-badge>
                 ${e.player2}
              <sl-button
                slot="suffix"
                variant="neutral"
                outline
                @click=${()=>this.editMatch(t)}
                >Edit</sl-button
              >
            </sl-menu-item>
          `)}
      </sl-menu>
    `}};M([d({type:Array})],P.prototype,"matchHistory",2);P=M([h("match-history")],P);var T=Object.defineProperty,V=Object.getOwnPropertyDescriptor,O=(e,t,s,l)=>{for(var a=l>1?void 0:l?V(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=(l?i(t,s,a):i(a))||a);return l&&a&&T(t,s,a),a};let b=class extends y{constructor(){super(...arguments),this.isOpen=!1,this.message=""}open(e){this.message=e,this.isOpen=!0}close(){this.dispatchEvent(new CustomEvent("close")),this.isOpen=!1}confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.close()}render(){return this.isOpen?n`
      <sl-dialog
        label="Clear All Data"
        ?open=${this.isOpen}
        @sl-after-close=${this.close}
      >
        <p>${this.message}</p>
        <sl-button slot="footer" variant="danger" @click=${this.confirm}>
          Confirm
        </sl-button>
        <sl-button slot="footer" variant="default" @click=${this.close}>
          Cancel
        </sl-button>
      </sl-dialog>
    `:n``}};O([d({type:Boolean})],b.prototype,"isOpen",2);O([d({type:String})],b.prototype,"message",2);b=O([h("confirmation-modal")],b);var q=Object.defineProperty,z=Object.getOwnPropertyDescriptor,c=(e,t,s,l)=>{for(var a=l>1?void 0:l?z(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=(l?i(t,s,a):i(a))||a);return l&&a&&q(t,s,a),a};let p=class extends y{constructor(){super(...arguments),this.activeTab="standings",this.players=[],this.matchHistory=JSON.parse(localStorage.getItem("matchHistory")||"[]"),this.standings=[],this.isLoading=!0,this.editModalOpen=!1,this.editMatchIndex=null,this.confirmationModalOpen=!1}connectedCallback(){super.connectedCallback(),this.loadData()}async loadData(){try{const e=localStorage.getItem("players"),t=localStorage.getItem("matchHistory");this.players=e?JSON.parse(e):[],this.matchHistory=t?JSON.parse(t):[]}catch(e){console.error("Error loading data:",e),this.players=[],localStorage.setItem("players",JSON.stringify(this.players))}finally{this.isLoading=!1,this.calculateStandings()}}addPlayer(e){this.players=[...this.players,e],localStorage.setItem("players",JSON.stringify(this.players)),this.calculateStandings(),this.requestUpdate()}removePlayer(e){this.players=this.players.filter(t=>t!==e),localStorage.setItem("players",JSON.stringify(this.players)),this.calculateStandings(),this.requestUpdate()}clearAllPlayers(){this.players=[],localStorage.setItem("players",JSON.stringify(this.players)),this.calculateStandings(),this.requestUpdate()}recordMatch(e){this.matchHistory=[...this.matchHistory,e],localStorage.setItem("matchHistory",JSON.stringify(this.matchHistory)),this.calculateStandings(),this.requestUpdate()}calculateStandings(){console.log("calculateStandings called");const e=this.initializeStandings();this.matchHistory.forEach(t=>this.applyMatchResult(t,e)),this.finalizeStandings(e),console.log("standings:",this.standings)}initializeStandings(){const e=new Map;return this.players.forEach(t=>{e.set(t,{wins:0,losses:0,draws:0,points:0,winPercentage:0})}),e}applyMatchResult(e,t){const s=t.get(e.player1),l=t.get(e.player2);s&&l?e.result==="win"?(s.wins++,s.points+=3,l.losses++):e.result==="loss"?(l.wins++,l.points+=3,s.losses++):(s.draws++,s.points++,l.draws++,l.points++):(s||console.error(`Player not found in standings: ${e.player1}`),l||console.error(`Player not found in standings: ${e.player2}`))}finalizeStandings(e){this.players.forEach(t=>{const s=e.get(t),l=s.wins+s.losses+s.draws;s.winPercentage=l>0?s.wins/l*100:0,s.winPercentage=parseFloat(s.winPercentage.toFixed(2))}),this.standings=Array.from(e.entries()).map(([t,s])=>({name:t,wins:s.wins,losses:s.losses,draws:s.draws,points:s.points,winPercentage:s.winPercentage})),this.standings.sort((t,s)=>s.points!==t.points?s.points-t.points:(s.winPercentage||0)-(t.winPercentage||0))}openEditModal(e){this.editMatchIndex=e,this.editModalOpen=!0}editMatch(e){this.editMatchIndex!==null&&(this.matchHistory=this.matchHistory.map((t,s)=>s===this.editMatchIndex?e:t),localStorage.setItem("matchHistory",JSON.stringify(this.matchHistory)),this.calculateStandings(),this.editMatchIndex=null,this.editModalOpen=!1,this.requestUpdate())}exportMatchResults(){const e=this.matchHistory.map(t=>`${t.player1},${t.player2},${t.result}`).join(`
`);this.downloadCSV(e,"match-results.csv")}exportStandings(){const e=this.standings.map(t=>`${t.name},${t.wins},${t.losses},${t.draws},${t.points},${t.winPercentage||0}`).join(`
`);this.downloadCSV(e,"standings.csv")}downloadCSV(e,t){const s=new Blob([e],{type:"text/csv;charset=utf-8;"}),l=URL.createObjectURL(s),a=document.createElement("a");a.href=l,a.setAttribute("download",t),document.body.appendChild(a),a.click(),document.body.removeChild(a)}clearMatchResultsConfirmed(){this.matchHistory=[],localStorage.setItem("matchHistory",JSON.stringify(this.matchHistory)),this.calculateStandings(),this.requestUpdate()}openConfirmationModal(){this.confirmationModalOpen=!0}closeConfirmationModal(){this.confirmationModalOpen=!1}clearStandingsConfirmed(){this.standings=[],this.players=[],localStorage.removeItem("matchHistory"),localStorage.removeItem("players"),this.requestUpdate(),this.closeConfirmationModal()}setActiveTab(e){this.activeTab=e}render(){return this.isLoading?n`
        <p>Loading...</p>
        <sl-spinner style="font-size: 3rem;"></sl-spinner>
      `:n`
      <div style="display: flex; flex-direction: column; grid-gap: 1rem;">
        <sl-details summary="Match Results" open>
          <match-input .players=${this.players.map(e=>({name:e}))} @match-recorded=${e=>this.recordMatch(e.detail)}></match-input>
        </sl-details>
        <sl-tab-group active-tab=${this.activeTab}>
          <sl-tab slot="nav" panel="standings">Standings</sl-tab>
          <sl-tab slot="nav" panel="history">History</sl-tab>
          <sl-tab slot="nav" panel="players">Players</sl-tab>
          <sl-tab-panel name="standings">
            <sl-card>
              <div slot="header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  Match Standings
                  <sl-button-group label="game actions">
                    <sl-tooltip content="Export Standings">
                      <sl-button variant="success" outline label="export standings" @click=${this.exportStandings}>
                        <sl-icon library="default" name="file-earmark-excel-fill" label="Export Standings"></sl-icon>
                      </sl-button>
                    </sl-tooltip>
                    <sl-tooltip content="Clear All Data">
                      <sl-button variant="warning" outline label="action to clear standings" @click=${this.clearStandingsConfirmed}>
                        <sl-icon library="default" name="trash-fill" label="Clear Standings"></sl-icon>
                      </sl-button>
                    </sl-tooltip>
                    <sl-tooltip content="Clear Data">
                      <sl-button variant="danger" outline label="launch a modal to confirm clearing of match data" @click=${this.openConfirmationModal}>
                        <sl-icon library="default" name="exclamation-triangle-fill" label="Clear Data"></sl-icon>
                       </sl-button>
                    </sl-tooltip>
                  </sl-button-group>
                </div>
              </div>
              <standings-display .standings=${this.standings}></standings-display>
            </sl-card>
          </sl-tab-panel>
          <sl-tab-panel name="history">
            <sl-card>
              <div slot="header">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  Match History
                  <sl-tooltip content="Export Results">
                    <sl-button variant="success" outline label="export match results" @click=${this.exportMatchResults}>
                      <sl-icon library="default" name="file-earmark-excel-fill" label="Export Results"></sl-icon>
                    </sl-button>
                  </sl-tooltip>
                </div>
              </div>
              <match-history .matchHistory=${this.matchHistory} @edit-match=${e=>this.openEditModal(e.detail)}></match-history>
            </sl-card>
          </sl-tab-panel>
          <sl-tab-panel name="players">
            <player-input
              @player-added=${e=>this.addPlayer(e.detail)}
              @remove-player=${e=>this.removePlayer(e.detail)}
              @clear-all-players=${()=>this.clearAllPlayers()}
              .players=${this.players}
            ></player-input>
          </sl-tab-panel>
        </sl-tab-group>
      </div>
      <edit-modal .match=${this.editMatchIndex!==null?this.matchHistory[this.editMatchIndex]:null} .isOpen=${this.editModalOpen} @match-edited=${e=>this.editMatch(e.detail)} @close=${()=>this.editModalOpen=!1}></edit-modal>
      <confirmation-modal
        .isOpen=${this.confirmationModalOpen}
        message="Are you sure you want to clear the match data? This will also clear all related information."
        @confirm=${this.clearMatchResultsConfirmed}
        @close=${this.closeConfirmationModal}
      ></confirmation-modal>
      <style>
        sl-card {
          width: 100%;
        }
        sl-menu-item {
          background-color: var(--sl-color-neutral-50);
        }
      </style>
    `}};c([o()],p.prototype,"activeTab",2);c([o()],p.prototype,"players",2);c([o()],p.prototype,"matchHistory",2);c([o()],p.prototype,"standings",2);c([o()],p.prototype,"isLoading",2);c([o()],p.prototype,"editModalOpen",2);c([o()],p.prototype,"editMatchIndex",2);c([o()],p.prototype,"confirmationModalOpen",2);p=c([h("standings-tracker")],p);var J=Object.getOwnPropertyDescriptor,U=(e,t,s,l)=>{for(var a=l>1?void 0:l?J(t,s):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(a=i(a)||a);return a};let S=class extends y{render(){return n`
      <app-header ?enableBack="${!0}"></app-header>
      <br/>
      <h1>Game Tracker</h1>
      <standings-tracker></standings-tracker>
      <style>
        sl-button::part(prefix) sl-icon {
          font-size: 1.125rem;
        }
      </style>
    `}};S=U([h("app-standings")],S);export{S as AppDashboard};
//# sourceMappingURL=app-game-tracker-C6lJ4bK3.js.map
