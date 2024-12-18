import{_ as o,c as i,j as e,a,I as t,a4 as n,o as l,D as r}from"./chunks/framework.Cp3ltd4t.js";const C=JSON.parse('{"title":"Introduction Vuejs 3","description":"","frontmatter":{"next":false,"prev":{"text":"Les hooks de vuejs","link":"/language/js/vuejs/vuejs2/hookVuejs"}},"headers":[],"relativePath":"language/js/vuejs/vuejs3/IntroVuejs3.md","filePath":"language/js/vuejs/vuejs3/IntroVuejs3.md","lastUpdated":1731542117000}'),p={name:"language/js/vuejs/vuejs3/IntroVuejs3.md"},u=n(`<h1 id="introduction-vuejs-3" tabindex="-1">Introduction Vuejs 3 <a class="header-anchor" href="#introduction-vuejs-3" aria-label="Permalink to &quot;Introduction Vuejs 3&quot;">​</a></h1><p>Dans la continuité de la version 2, la version 3 apporte une nouvelle approche plus performante notamment sur son API (composition API). Contrairement à l&#39;API option de la version 2, la composition API apporte une nouvelle organisation de code axé sur la logique fonctionnelle plutôt que par type.</p><div class="tip custom-block"><p class="custom-block-title">new features 🎉</p><p><code>setup()</code> : La méthode <code>setup()</code> est le cœur de la Composition API. Elle est exécutée avant la création du composant et permet de définir des réactifs et des méthodes à utiliser dans le composant.</p></div><h2 id="quoi-de-nouveau-dans-la-nouvelle-version" tabindex="-1">Quoi de nouveau dans la nouvelle version ? <a class="header-anchor" href="#quoi-de-nouveau-dans-la-nouvelle-version" aria-label="Permalink to &quot;Quoi de nouveau dans la nouvelle version ?&quot;">​</a></h2><h3 id="la-performance" tabindex="-1">La performance 🤯 <a class="header-anchor" href="#la-performance" aria-label="Permalink to &quot;La performance :exploding_head:&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Nouveautés</p><p><strong><h4>Temps de montage des composants :</h4></strong> Vue 3 est environ <code>50%</code> plus rapide que Vue 2 lors de la phase de montage (initialisation des composants), particulièrement pour les applications avec beaucoup de composants ou des composants complexes.</p><p><strong><h4>Taille du bundle :</h4></strong> La taille du code source de Vue 3 est environ <code>40%</code> plus petite que celle de Vue 2 dans les builds les plus légers. Cette réduction est rendue possible grâce à la modularité accrue et à l’optimisation de l’arbre d’analyse (tree-shaking).</p><p><strong><h4>Temps de mise à jour (patch) :</h4></strong> Les opérations de mise à jour du DOM (patching) sont également beaucoup plus performantes, avec une amélioration d&#39;environ <code>50-70%</code> selon le scénario. Cela concerne les situations où des changements fréquents et rapides du DOM se produisent, comme lors de l’animation ou de la manipulation de grandes listes.</p><p><strong><h4>Allocation mémoire :</h4></strong> Vue 3 consomme également plus de <code>30%</code> de mémoire en moins par rapport à Vue 2, surtout dans les applications qui montent et démontent un grand nombre de composants dynamiques.</p></div><h3 id="typescript-le-hero" tabindex="-1">Typescript le héro 😎 <a class="header-anchor" href="#typescript-le-hero" aria-label="Permalink to &quot;Typescript le héro :sunglasses:&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">TypeWrite</p><p><strong><u>Vue 3 a été réécrit en TypeScript</u></strong>, ce qui permet une meilleure intégration et compatibilité avec TypeScript pour les développeurs qui choisissent d&#39;utiliser ce langage. Cela apporte des avantages en matière de vérification des types et de support IDE.</p></div><h3 id="l-api-a-change" tabindex="-1">l&#39;API à changé ! <a class="header-anchor" href="#l-api-a-change" aria-label="Permalink to &quot;l&#39;API à changé !&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">API Composition</p><p>Vue 3 introduit un changement dans la façon dont l&#39;application est montée. Au lieu d&#39;utiliser new Vue(), vous devez maintenant utiliser createApp(). Par exemple :</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h3 id="trop-sympa" tabindex="-1">Trop sympa 😎 <a class="header-anchor" href="#trop-sympa" aria-label="Permalink to &quot;Trop sympa :sunglasses:&quot;">​</a></h3>`,11),c={class:"warning custom-block"},d=e("p",{class:"custom-block-title"},"Outil de migration",-1),h={href:"https://v3-migration.vuejs.org/",target:"_blank"},m=n('<p>et plein d&#39;autres changements...</p><h2 id="les-composables" tabindex="-1">Les composables <a class="header-anchor" href="#les-composables" aria-label="Permalink to &quot;Les composables&quot;">​</a></h2><p>Les composables dans Vue 3 sont des fonctions réutilisables basées sur la Composition API. Ils permettent de regrouper la logique réactive d&#39;une application en dehors des composants, rendant cette logique plus facile à organiser et à partager à travers plusieurs composants.</p><div class="info custom-block"><p class="custom-block-title">Avantages des composables</p><ul><li><p><u><h4>Séparation des préoccupations :</h4></u> Les composables permettent d’organiser le code par logique fonctionnelle (ex : gestion d’état, événements, API) plutôt que par composant, ce qui améliore la lisibilité et la maintenabilité.</p></li><li><p><u><h4>Testabilité :</h4></u> Les fonctions composables sont plus faciles à tester que des mixins ou des objets de composants car elles sont des fonctions pures sans effet de bord direct.</p></li><li><p><u><h4>Plus propre que les mixins :</h4></u> Contrairement aux mixins, les composables évitent les conflits de noms et offrent plus de transparence sur les dépendances.</p></li></ul></div><h2 id="fragments-teleport-suspense" tabindex="-1">Fragments, Teleport, Suspense <a class="header-anchor" href="#fragments-teleport-suspense" aria-label="Permalink to &quot;Fragments, Teleport, Suspense&quot;">​</a></h2>',5),g={class:"warning custom-block"},v=e("p",{class:"custom-block-title"},"features",-1),k=e("u",null,[e("h4",null,"Fragments :")],-1),b={href:"https://v3-migration.vuejs.org/new/fragments.html",target:"_blank"},_=e("u",null,[e("h4",null,"Teleport :")],-1),f={href:"https://www.monterail.com/blog/whats-new-in-vue-3-the-most-interesting-new-features#teleport",target:"_blank"},q=e("u",null,[e("h4",null,"Suspense :")],-1),y={href:"https://www.monterail.com/blog/whats-new-in-vue-3-the-most-interesting-new-features#experimental-suspense",target:"_blank"};function j(E,x,V,P,A,T){const s=r("Badge");return l(),i("div",null,[u,e("div",c,[d,e("p",null,[a("Vue 3 propose un outil de migration pour aider à la transition depuis Vue 2 vers Vue 3. Il signale les parties du code qui nécessitent des ajustements pour être compatibles avec Vue 3. Pour en savoir plus, veuillez consulter le lien : "),e("a",h,[t(s,{type:"danger",text:"Documentation"})])])]),m,e("div",g,[v,e("ul",null,[e("li",null,[k,a(" Possibilité de retourner plusieurs éléments à la racine d’un composant sans avoir besoin d’un élément parent unique. lien: "),e("a",b,[t(s,{type:"danger",text:"Documentation"})])]),e("li",null,[_,a(" Permet de rendre des éléments DOM dans une autre partie de l’arbre DOM, en dehors de la hiérarchie du composant. lien: "),e("a",f,[t(s,{type:"danger",text:"Documentation"})])]),e("li",null,[q,a(" Gère le rendu asynchrone des composants, utile pour afficher un état de chargement lorsque des données ou des composants sont encore en cours de chargement. lien: "),e("a",y,[t(s,{type:"danger",text:"Documentation"})])])])])])}const w=o(p,[["render",j]]);export{C as __pageData,w as default};