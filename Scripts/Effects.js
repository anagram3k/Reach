namespace Effects {
	
	reg Flanger;
	reg Distortion;
	reg Degrade;
	reg Chorus;
		
	// Flanger
	const var knob_effects_flair = Content.getComponent("knob_effects_flair");
	const var themeAble_label_effects_flanger = Content.getComponent("themeAble_label_effects_flanger");
	knob_effects_flair.setControlCallback(onknob_flair_flairControl);
	
	Content.getComponent("displayButton_flanger_bypass").setControlCallback(ondisplayButton_flanger_bypassControl);
	const var effectDisplay_Flanger = Content.getComponent("effectDisplay-Flanger");
	
	Content.getComponent("displayKnob_flanger_speed").setControlCallback(ondisplayKnob_flanger_speedControl);
	Content.getComponent("displayKnob_flanger_depth").setControlCallback(ondisplayKnob_flanger_depthControl);
	Content.getComponent("displayKnob_flanger_feedback").setControlCallback(ondisplayKnob_flanger_feedbackControl);
	Content.getComponent("displayKnob_flanger_delay").setControlCallback(ondisplayKnob_flanger_delayControl);
	Content.getComponent("displayKnob_flanger_offset").setControlCallback(ondisplayKnob_flanger_offsetControl);
	
	inline function onknob_flair_flairControl(component, value)
	{
		Flanger.setAttribute(Flanger.Mix, value);
		updateParameterWithLabel('FLAIR', value, '%');
		showTempScreen('flair');
	
		FlairAnimation.setShift(value);
		FlairAnimation.setAmplitude(value);
		FlairAnimation.AnimationPanel.repaintImmediately();
	};
	
	inline function ondisplayButton_flanger_bypassControl(component, value) {
		Flanger.setBypassed(!value);
		effectDisplay_Flanger.set('enabled', value);
		knob_effects_flair.set('enabled', value);
		themeAble_label_effects_flanger.set('enabled', value);
	};
	
	inline function ondisplayKnob_flanger_speedControl(component, value) {
		Flanger.setAttribute(Flanger.Speed, value);
	};

	inline function ondisplayKnob_flanger_depthControl(component, value) {
		Flanger.setAttribute(Flanger.Depth, value);
	};
	
	inline function ondisplayKnob_flanger_feedbackControl(component, value) {
	Flanger.setAttribute(Flanger.Feedback, value);
	};
	
	inline function ondisplayKnob_flanger_delayControl(component, value) {
	Flanger.setAttribute(Flanger.Delay, value);
	};
	
	inline function ondisplayKnob_flanger_offsetControl(component, value) {
		Flanger.setAttribute(Flanger.Offset, value);
	};
	
	// DEGRADE
	const var knob_effects_degrade = Content.getComponent("knob_effects_degrade");
	const var themeAble_label_effects_degrade = Content.getComponent("themeAble_label_effects_degrade");
	knob_effects_degrade.setControlCallback(onknob_degrade_mixControl);
	
	Content.getComponent("displayButton_degrade_bypass").setControlCallback(ondisplayButton_degrade_bypassControl);
	const var effectDisplay_Degrade = Content.getComponent("effectDisplay-Degrade");
	
	Content.getComponent("displayKnob_degrade_amount").setControlCallback(ondisplayKnob_degrade_amountControl);
	Content.getComponent("displayKnob_degrade_depth").setControlCallback(ondisplayKnob_degrade_depthControl);	
	Content.getComponent("displayKnob_degrade_frequency").setControlCallback(ondisplayKnob_degrade_frequencyControl);	
	Content.getComponent("displayKnob_degrade_highcut").setControlCallback(ondisplayKnob_degrade_highcutControl);		
	Content.getComponent("displayKnob_degrade_lowcut").setControlCallback(ondisplayKnob_degrade_lowcutControl);
	
	inline function onknob_degrade_mixControl(component, value) {
		Degrade.setAttribute(Degrade.Mix, value);
		updateParameterWithLabel('DEGRADE', value, '%');
		showTempScreen('degrade');
		
		DegradeAnimation.setZoom(value);
		DegradeAnimation.setBorderRadius(value);		
		DegradeAnimation.AnimationPanel.repaintImmediately();
	};
	
	inline function ondisplayButton_degrade_bypassControl(component, value) {
		
		Degrade.setBypassed(!value);
		effectDisplay_Degrade.set('enabled', value);
		knob_effects_degrade.set('enabled', value);
		themeAble_label_effects_degrade.set('enabled', value);
	};
	
	inline function ondisplayKnob_degrade_amountControl(component, value) {
		Degrade.setAttribute(Degrade.Amount, value);
	};
	
	inline function ondisplayKnob_degrade_depthControl(component, value) {
		Degrade.setAttribute(Degrade.ModulationDepth, value);
	};
		
	inline function ondisplayKnob_degrade_frequencyControl(component, value) {
		Degrade.setAttribute(Degrade.ModulationSpeed, value);
	};
		
	inline function ondisplayKnob_degrade_highcutControl(component, value) {
		Degrade.setAttribute(Degrade.HighCut, value);
	};
		
	inline function ondisplayKnob_degrade_lowcutControl(component, value) {
		Degrade.setAttribute(Degrade.LowCut, value);
	};
	
	// CHORUS
	Content.getComponent("displayButton_chorus_bypass").setControlCallback(ondisplayButton_chorus_bypassControl);
	const var themeAble_label_effects_chorus = Content.getComponent("themeAble_label_effects_chorus");
	const var effectDisplay_Chorus = Content.getComponent("effectDisplay-Chorus");
	
	const var knob_effects_chorus = Content.getComponent("knob_effects_chorus");
	knob_effects_chorus.setControlCallback(onknob_effects_chorusControl);
	Content.getComponent("displayKnob_chorus_rate").setControlCallback(ondisplayKnob_chorus_rateControl);
	Content.getComponent("displayKnob_chorus_feedback").setControlCallback(ondisplayKnob_chorus_feedbackControl);
	Content.getComponent("displayKnob_chorus_depth").setControlCallback(ondisplayKnob_chorus_depthControl);
	Content.getComponent("displayKnob_chorus_Delay").setControlCallback(ondisplayKnob_chorus_DelayControl);
	
	inline function onknob_effects_chorusControl(component, value) {
		Chorus.setAttribute(Chorus.Mix, value);
		
		updateParameterWithLabel('CHORUS', value, '%');
		showTempScreen('chorus');
		
		ChorusAnimations.setShift(value);
		ChorusAnimations.setAmplitude(value);
		ChorusAnimations.AnimationPanel.repaintImmediately();
	};
	
	inline function ondisplayButton_chorus_bypassControl(component, value) {
		Chorus.setBypassed(!value);
		effectDisplay_Chorus.set('enabled', value);
		knob_effects_chorus.set('enabled', value);
		themeAble_label_effects_chorus.set('enabled', value);
	};
	
	inline function ondisplayKnob_chorus_rateControl(component, value) {
		Chorus.setAttribute(Chorus.Rate, value);
	};	
	
	inline function ondisplayKnob_chorus_feedbackControl(component, value) {
		Chorus.setAttribute(Chorus.Feedback, value);
	};	
	
	inline function ondisplayKnob_chorus_depthControl(component, value) {
		Chorus.setAttribute(Chorus.Depth, value);
	};
	
	inline function ondisplayKnob_chorus_DelayControl(component, value) {
		Chorus.setAttribute(Chorus.CentreDelay, value);
	};
	
	// DISTORION
	
	Content.getComponent("displayButton_distort_bypass").setControlCallback(ondisplayButton_distort_bypassControl);
	const var themeAble_label_effects_distortion = Content.getComponent("themeAble_label_effects_distortion");
	const var effectDisplay_Distort = Content.getComponent("effectDisplay-Distort");
	
	const var knob_effects_distortion = Content.getComponent("knob_effects_distortion");
	knob_effects_distortion.setControlCallback(onknob_effects_distortionControl);	
	Content.getComponent("displayKnob_distort_amount").setControlCallback(ondisplayKnob_distort_amountControl);
	
	inline function onknob_effects_distortionControl(component, value) {
		Distortion.setAttribute(Distortion.Mix, value);
		
		updateParameterWithLabel('DISTORTION', value, '%');
		showTempScreen('distortion');
		
		DistortionAnimation.setAlpha(value);
		DistortionAnimation.setScale(value);
	};
	
	inline function ondisplayButton_distort_bypassControl(component, value) {
		Distortion.setBypassed(!value);
		effectDisplay_Distort.set('enabled', value);
		knob_effects_distortion.set('enabled', value);
		themeAble_label_effects_distortion.set('enabled', value);
	};
	
	inline function ondisplayKnob_distort_amountControl(component, value) {
		Distortion.setAttribute(Distortion.Amount, value);
	};

}