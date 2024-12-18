import{_ as e,c as t,o as a,a4 as n}from"./chunks/framework.Cp3ltd4t.js";const f=JSON.parse('{"title":"Introduction au MVC","description":"","frontmatter":{"next":false,"prev":{"text":"Découverte de Laravel","link":"/language/PHP/Laravel/Laravel"}},"headers":[],"relativePath":"language/PHP/MVC.md","filePath":"language/PHP/MVC.md","lastUpdated":1733713064000}'),o={name:"language/PHP/MVC.md"},r=n('<h1 id="introduction-au-mvc" tabindex="-1"><u>Introduction au MVC</u> <a class="header-anchor" href="#introduction-au-mvc" aria-label="Permalink to &quot;&lt;u&gt;Introduction au MVC&lt;/u&gt;&quot;">​</a></h1><p>Le MVC (Modèle-Vue-Contrôleur) est un modèle d&#39;architecture logicielle couramment utilisé dans le développement d&#39;applications informatiques, en particulier dans les applications web et les applications basées sur les interfaces graphiques.</p><h2 id="_3-composants-distincts-mais-interconnectes" tabindex="-1"><u>3 composants distincts mais interconnectés</u> <a class="header-anchor" href="#_3-composants-distincts-mais-interconnectes" aria-label="Permalink to &quot;&lt;u&gt;3 composants distincts mais interconnectés&lt;/u&gt;&quot;">​</a></h2><h3 id="m-pour-modele" tabindex="-1">M pour Modèle ! <a class="header-anchor" href="#m-pour-modele" aria-label="Permalink to &quot;M pour Modèle !&quot;">​</a></h3><p>Tout d&#39;abord vient le Modèle : C&#39;est la représentation des données et des règles métiers de l&#39;application autrement dit il va traiter la logique des données, intéragir avec la base de données et va gérer les opérations de manipulation des données.</p><h3 id="v-pour-vue" tabindex="-1">V pour Vue ! <a class="header-anchor" href="#v-pour-vue" aria-label="Permalink to &quot;V pour Vue !&quot;">​</a></h3><p>Ensuite, vient la Vue : Elle est responsable de l&#39;affichage des données que le Modèle fournit, sous une forme compréhensible pour l&#39;utilisateur. La Vue ne contient pas de logique métier, elle se concentre uniquement sur la présentation des informations, que ce soit sous forme de texte, tableaux, graphiques, ou autres éléments visuels. Dans une application web, par exemple, la Vue correspondrait au HTML, CSS et parfois JavaScript qui affichent les données à l&#39;utilisateur final.</p><h3 id="c-pour-controleur" tabindex="-1">C pour Contrôleur ! <a class="header-anchor" href="#c-pour-controleur" aria-label="Permalink to &quot;C pour Contrôleur !&quot;">​</a></h3><p>Enfin, il y a le Contrôleur : Il fait le lien entre le Modèle et la Vue. Il reçoit les entrées de l&#39;utilisateur (par exemple, un clic sur un bouton ou la soumission d&#39;un formulaire), traite ces entrées et les envoie au Modèle. Une fois les données manipulées par le Modèle, le Contrôleur détermine quelle Vue doit être affichée pour refléter les changements. Il agit donc comme un intermédiaire qui orchestre les interactions entre les données (Modèle) et leur présentation (Vue).</p>',9),i=[r];function s(l,u,c,d,p,m){return a(),t("div",null,i)}const _=e(o,[["render",s]]);export{f as __pageData,_ as default};