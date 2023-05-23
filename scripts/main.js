Events.on(EventType.ContentInitEvent, cons(() => {
	Blocks.salvo.drawer.parts.clear();
	const part = new RegionPart("-barrel");
	part.progress = DrawPart.PartProgress.recoil.delay(0.5);
	part.under = true;
	part.turretHeatLayer = Layer.turret - 0.0001;
	part.moveY = -1.5;
	Blocks.salvo.drawer.parts.add(part);
}));