# Connection DB

## Ajout des Dépendances
```bash
# L'ORM de JS
npm install sequelize

#choisir le bon driver
# Le driver pour se connecter à SQL Server
npm install tedious
#Le driver pour se connecter à PostgreSql
npm install pg
```

Si on se connecte à un SGBD SQL Server, il faudra s'assure que le protocole tcp/ip soit actif.
Pour se faire, on peut utiliser **SQLServerManagerX.msc** (devrait se situer ici : C:\Windows\SysWOW64\SQLServerManager16.msc).
Un redémarrage du service sera nécessaire.

## Ajout des routers, controllers et services