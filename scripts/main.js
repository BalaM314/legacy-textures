Events.on(EventType.ContentInitEvent, cons(() => {
	Blocks.salvo.drawer.parts.clear();
	//weird hack
	//attempting to override "salvo" results in an error because vanilla mindustry no longer has a sprite called "salvo"
	//so i must manually set salvo's texture region
	Blocks.salvo.region = Core.atlas.find("salvo-preview");
	//same for salvo-heat, gotta use salvo-barrel-heat instead
	Blocks.salvo.drawer.heat = Core.atlas.find("salvo-barrel-heat");

	// Revert to pre-animation because I can't get the texture to look right
	// const part = new RegionPart("-barrel");
	// part.progress = DrawPart.PartProgress.recoil.delay(0.5);
	// part.under = true;
	// part.turretHeatLayer = Layer.turret - 0.0001;
	// part.moveY = -1.5;
	// Blocks.salvo.drawer.parts.add(part);

	Blocks.scatter.drawer.parts.get(0).under = true;
}));