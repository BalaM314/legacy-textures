Events.on(EventType.ContentInitEvent, cons(() => {
	Blocks.salvo.drawer.parts.clear();
	// Revert to pre-animation because I can't get the texture to look right
	// const part = new RegionPart("-barrel");
	// part.progress = DrawPart.PartProgress.recoil.delay(0.5);
	// part.under = true;
	// part.turretHeatLayer = Layer.turret - 0.0001;
	// part.moveY = -1.5;
	// Blocks.salvo.drawer.parts.add(part);

	Blocks.scatter.drawer.parts.get(0).under = true;
}));