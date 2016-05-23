// Compiled by ClojureScript 1.7.228 {}
goog.provide('koans.meditations.atoms');
goog.require('cljs.core');
koans.meditations.atoms.koans = cljs.core.list("Atoms are references to values","(= :__ (deref atomic-clock))","You can get its value more succintly","(= :__ @atomic-clock)","You can even change at the swap meet","(= :__ (do\n          (swap! atomic-clock inc)\n          @atomic-clock))","Keep taxes out of this: swapping requires no transaction","(= 5 (do\n         :__\n         @atomic-clock))","Any number of arguments might happen during a swap","(= :__ (do\n          (swap! atomic-clock + 1 2 3 4 5)\n          @atomic-clock))","Atomic atoms are atomic","(= :__ (do\n          (compare-and-set! atomic-clock 100 :fin)\n          @atomic-clock))","When your expectations are aligned with reality things, proceed that way","(= :fin (do\n            (compare-and-set! :__)\n            @atomic-clock))");
koans.meditations.atoms.fns = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"atomic-clock","atomic-clock",755396164,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0)))], null);

//# sourceMappingURL=atoms.js.map