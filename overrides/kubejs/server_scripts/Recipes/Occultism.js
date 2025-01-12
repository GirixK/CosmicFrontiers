
console.info('[CosmicFrontiers] - Loaded KubeJS Scripts for Occultism')
let yeet = (itemName) => {
  ServerEvents.recipes(event => {
    event.remove({ output: itemName })
  })
  ServerEvents.tags('item', event => {
    event.add('c:hidden_from_recipe_viewers', itemName)

  })
}
yeet('occultism:miner_debug_unspecialized')
// yeet('occultism:miner_foliot_unspecialized')
yeet('occultism:miner_djinni_ores')
yeet('occultism:miner_afrit_deeps')
yeet('occultism:miner_marid_master')
yeet('occultism:ritual_dummy/craft_miner_afrit_deeps')
yeet('occultism:ritual_dummy/craft_miner_djinni_ores')
// yeet('occultism:ritual_dummy/craft_miner_foliot_unspecialized')
yeet('occultism:ritual_dummy/craft_miner_marid_master')

yeet('occultism:silver_ingot')
yeet('occultism:gold_dust')
yeet('occultism:copper_dust')
yeet('occultism:silver_dust')
yeet('occultism:obsidian_dust')
yeet('occultism:crushed_end_stone')

ServerEvents.tags('item', event => {
  event.remove('forge:ingots/silver', 'occultism:silver_ingot')
  event.remove('forge:dusts/iron', 'occultism:iron_dust')
  event.remove('forge:dusts/gold', 'occultism:gold_dust')
  event.remove('forge:dusts/copper', 'occultism:copper_dust')
  event.remove('forge:dusts/silver', 'occultism:silver_dust')
  event.remove('forge:dusts/obsidian', 'occultism:obsidian_dust')
  event.remove('forge:dusts/end_stone', 'occultism:crushed_end_stone')
  event.remove('forge:raw_materials/iesnium', 'gtceu:raw_iesnium')
  event.add('c:hidden_from_recipe_viewers', 'gtceu:raw_iesnium')
})

ServerEvents.recipes(event => {
  event.remove({ type: 'occultism:crushing' })
  event.remove({ type: 'occultism:miner' })
  event.remove({ id: 'occultism:spirit_fire/spirit_attuned_gem' })
  // event.recipes.occultism.spirit_trade('minecraft:rotten_flesh', 'minecraft:bone')
  event.recipes.occultism.spirit_fire('occultism:spirit_attuned_gem', 'gtceu:certus_quartz_gem')
  // event.recipes.occultism.crushing(
  //   '2x #forge:ores/iron',
  //   '#forge:tools/swords'
  // )
  event.shaped('occultism:chalk_white_impure', [
    'TC ',
    'TC ',
    'TC ',
  ], {
    T: 'gtceu:talc_dust',
    C: 'gtceu:ash_dust'
  })
  //Iesnium Pickaxe
  event.remove({ id: 'occultism:crafting/iesnium_pickaxe' })
  event.shaped('occultism:iesnium_pickaxe', [
    'PII',
    'FSH',
    ' S '
  ], {
    P: 'gtceu:iesnium_plate',
    I: 'gtceu:iesnium_ingot',
    S: '#forge:rods/wooden',
    F: '#forge:tools/files',
    H: '#forge:tools/hammers'
  })
  event.remove({ id: 'occultism:crafting/lens_frame' })
  event.shaped('occultism:lens_frame', [
    'PHP',
    'ILI',
    'SFS'
  ], {
    P: 'gtceu:silver_rod',
    I: 'occultism:otherstone_frame',
    S: 'gtceu:silver_plate',
    L: 'gtceu:silver_ring',
    F: '#forge:tools/files',
    H: '#forge:tools/hammers'
  })
  event.shaped('occultism:lenses', [
    ' C ',
    'IPI',
    'SFS'
  ], {
    P: 'gtceu:fine_gold_wire',
    I: 'occultism:spirit_attuned_gem',
    S: 'experienceobelisk:whisperglass',
    F: '#forge:tools/files',
    C: '#forge:tools/wire_cutters'
  })
  event.remove({ id: 'occultism:crafting/lenses' })
  event.remove({ id: 'occultism:crafting/chalk_white_impure' })
  event.remove({ id: 'occultism:spirit_fire/chalk_white' })
  event.recipes.gtceu.primitive_blast_furnace('chalk_purify')
    .itemInputs('occultism:chalk_white_impure')
    .itemOutputs('occultism:chalk_white')
    .duration(3000)

  event.recipes.occultism.miner(
    Item.of('cosmiccore:rune_slate_arklys').withChance(50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    Item.of('cosmiccore:rune_slate_tylomir').withChance(50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    Item.of('cosmiccore:rune_slate_khoruth').withChance(50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    Item.of('cosmiccore:rune_slate_zelothar').withChance(50),
    'occultism:miner_foliot_unspecialized'
  )
  event.recipes.occultism.miner(
    Item.of('gtceu:raw_iesnium').withChance(75),
    'occultism:iesnium_pickaxe'
  )
  event.recipes.occultism.ritual(
    '16x gtceu:runed_steel_ingot',
    [
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      'cosmiccore:rune_slate_tylomir',
      'occultism:iesnium_ingot',
      'cosmiccore:rune_slate_zelothar',
      'occultism:iesnium_ingot',
    ],
    'occultism:otherworld_ashes',
    'occultism:rune_ritual'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.rune_ritual")
  event.recipes.occultism.ritual(
    'nether_remastered:seal_of_the_underworld_item',
    [
      "nether_remastered:seal_piece_1",
      "nether_remastered:seal_piece_2",
      "nether_remastered:seal_piece_3",
      "nether_remastered:seal_piece_4",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot",
      "gtceu:steel_ingot"
    ],
    "nether_remastered:seal_crystal",
    'occultism:basic_fusion'
  ).dummy("kubejs:dummy_ritual_thing").id("occultism:frontiers.fusion_ritual.seal_underworld")
})