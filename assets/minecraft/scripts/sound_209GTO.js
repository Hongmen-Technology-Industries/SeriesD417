function onUpdate(su) 
	{
		var speed = su.getSpeed();
		var notch = su.getNotch();
		if (notch !== 0 && speed > 0) 
			{
				if (speed < 6)
					{ 
						var pitch0 = 0.029 * speed * 1.2 + 0.6 - 0.3;
						var vol5 = 0.50 * speed / 2;
						su.playSound('sound_209GTO', 'train.GTO1', vol5, pitch0);
					}
				else if (speed >= 6 && speed < 10)
					{
						var pitch0 = 0.019 * speed * 3.0 + 0.6 - 0.1;
						var vol5 = 0.50 * speed / 2;
						su.playSound('sound_209GTO', 'train.GTO1', vol5, pitch0);
					}
				else if (speed >= 10 && speed < 18)
					{
						var pitch0 = 0.019 * speed * 2.0 + 0.6 - 0.2;
						var vol5 = 0.50 * speed / 2;
						su.playSound('sound_209GTO', 'train.GTO1', vol5, pitch0);
					}
				else if (speed >= 18 && speed < 60)
					{
						var pitch0 = 0.019 * speed+0.6 - 0.2;
						var vol5 = 0.50 * speed / 2;
						su.playSound('sound_209GTO', 'train.GTO1', vol5, pitch0);
					}
        		else if (speed >= 60 && speed < 130)
					{
						var pitch0 = 0.019 * speed+0.6 -0.3;
						var vol5 = 1 - ( speed - 60 ) / 100 ;
						su.playSound('sound_209GTO', 'train.GTO1', vol5, pitch0);
					}
				else
					{
						su.stopSound('sound_209GTO', 'train.GTO1');
					}
			}
		else
			{
				su.stopSound('sound_209GTO', 'train.GTO1');
			}
		if (speed > 0)
			{
				var pitch0 = 0.008 * speed+0.3;
				var vol5 = 0.2 * speed / 1.1;
				su.playSound('sound_209GTO', 'train.run1', vol5, pitch0);
			}
		else
			{
				su.stopSound('sound_209GTO', 'train.run1');
			}
	    if (speed = 0)
			{
				var pitch0 = 10;
				var vol5 = 10;
				su.playSound('sound_209GTO', 'train.rtm_cop', vol5, pitch0);
			}
		
	}