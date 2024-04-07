//Removing Byproducts from particular ore steps
ServerEvents.recipes((event) => {
    // Oxalic Acid
    event.recipes.gtceu.chemical_reactor('oxalic_acid')
        .inputFluids('gtceu:ethylene 1000')
        .inputFluids('gtceu:oxygen 4000')
        .itemInputs('4x gtceu:potassium_dichromate_dust')
        .outputFluids('gtceu:oxalic_acid 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    //Slag separation
    event.recipes.gtceu.centrifuge('cloggurm_mix_spinny')
        .inputFluids('gtceu:undergarden_virulent_cloggrum_mixture 5000')
        .outputFluids('gtceu:xenotime_slag 500')
        .outputFluids('gtceu:hydrofluoric_acid 4500')
        .duration(600)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.centrifuge('xeno_spinny')
        .inputFluids('gtceu:xenotime_concentrate 1000')
        .outputFluids('gtceu:lre_slag 700')
        .outputFluids('gtceu:mre_slag 300')
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV]);

    // Xenotime extraction tier 1
    event.recipes.gtceu.chemical_dehydrator('xenotime_concentration')
        .inputFluids('gtceu:xenotime_slag 1000')
        .outputFluids('gtceu:xenotime_concentrate 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('alkaline_xenotime_leaching') // Set higher energy use (temperature requirement sim)
        .inputFluids('gtceu:lre_slag 1000')
        .itemInputs('4x gtceu:sodium_hydroxide_dust') //can also add recipe for the fluid NaOH
        .outputFluids('gtceu:mixed_lre_leachate 1000')
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.centrifuge('xenotime_leachate_separation_1')
        .inputFluids('gtceu:mixed_lre_leachate 1000')
        .outputFluids('gtceu:leached_lre_liquor 200')
        .itemOutputs('8x gtceu:leached_lre_residue_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('lre_liquor_1')
        .itemInputs('8x gtceu:leached_lre_residue_dust')
        .inputFluids('gtceu:nitric_acid 200')
        .outputFluids('gtceu:leached_lre_liquor 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_reactor('lre_liquor_precipitation_1')
        .outputFluids('gtceu:waste_water')
        .inputFluids('gtceu:leached_lre_liquor 700')
        .inputFluids('gtceu:oxalic_acid 300')
        .outputFluids('gtceu:wet_lre_precipitate 1000')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.chemical_dehydrator('lre_precipitate_drying_1')
        .inputFluids('gtceu:wet_lre_precipitate 1000')
        .itemOutputs('4x gtceu:dried_mixed_lre_precipitate_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.centrifuge('mixed_lre_dust_spinny_1')
        .itemInputs('16x gtceu:dried_mixed_lre_precipitate_dust')
        .chancedOutput('gtceu:lanthanum_dust', 1000, 500)
        .chancedOutput('gtceu:cerium_dust', 1000, 500)
        .chancedOutput('gtceu:praseodymium_dust', 1000, 500)
        .chancedOutput('2x gtceu:neodymium_dust', 6000, 500)
        .duration(600)
        .EUt(GTValues.VA[GTValues.HV]);
    //Chromate recycling
    event.recipes.gtceu.chemical_reactor('chromium_hydroxide_reactor')
        .itemInputs('6x gtceu:sodium_hydroxide')
        .inputFluids('gtceu:chromate_waste_water 1000')
        .itemOutputs('2x gtceu:chromium_hydroxide_dust')
        .duration(60)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.chemical_dehydrator('chromium_oxide_vvarm')
        .itemInputs('gtceu:chromium_hydroxide')
        .itemOutputs('gtceu:chromium_iii_oxide_dust')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

});