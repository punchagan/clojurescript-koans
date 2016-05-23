// Compiled by ClojureScript 1.7.228 {}
goog.provide('koans.meditations.vectors');
goog.require('cljs.core');
koans.meditations.vectors.koans = cljs.core.list("You can use vectors in clojure as array-like structures",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(42)], null))),"You can create a vector from a list",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1))))),"Or from some elements",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),null,null)),"But you can populate it with any number of elements at once",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"__","__",-223697812)], null),cljs.core.list(new cljs.core.Symbol(null,"vec","vec",982683596,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((1),(2))))),"Conjoining to a vector is different than to a list",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(111),(222)], null),(333))),"You can get the first element of a vector like so",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanut","peanut",929195406),new cljs.core.Keyword(null,"butter","butter",123469346),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"jelly","jelly",911732668)], null))),"And the last in a similar fashion",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanut","peanut",929195406),new cljs.core.Keyword(null,"butter","butter",123469346),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"jelly","jelly",911732668)], null))),"Or any index if you wish",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanut","peanut",929195406),new cljs.core.Keyword(null,"butter","butter",123469346),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"jelly","jelly",911732668)], null),(3))),"You can also slice a vector",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"__","__",-223697812),cljs.core.list(new cljs.core.Symbol(null,"subvec","subvec",364611032,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanut","peanut",929195406),new cljs.core.Keyword(null,"butter","butter",123469346),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"jelly","jelly",911732668)], null),(1),(3))),"Equality with collections is in terms of values",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),(1),(2),(3)),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),(1),(2),new cljs.core.Keyword(null,"__","__",-223697812))));

//# sourceMappingURL=vectors.js.map