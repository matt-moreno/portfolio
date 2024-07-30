interface PolylineMap {
  id: string;
  polyline: string;
  summary_polyline: string;
}

export interface GeoTypes {
  id: number;
  title: string;
  exercise: string;
  elevHigh: number;
  elevLow: number;
  startLat: number[];
  endLat: number[];
  polyline: [number, number][];
}

export interface RecentActivityTypes {
  distance: number;
  pace: string;
  time: string;
  heartRate: number;
}

export interface ActivityTypes {
  id: number;
  external_id: string;
  upload_id: number;
  athlete: string;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  elev_high: number;
  elev_low: number;
  type: string;
  start_date: Date;
  start_date_local: Date;
  timezone: string;
  start_latlng: number[];
  end_latlng: number[];
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  total_photo_count: number;
  map: PolylineMap;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  flagged: boolean;
  workout_type: number;
  average_speed: number;
  max_speed: number;
  has_kudoed: boolean;
  description: string;
  average_heartrate: number;
  photos: object[];
  gear: string;
  segment_efforts: number[];
  device_name: string;
  embed_token: string;
  splits_metric: number[];
  splits_standard: number[];
  laps: number[];
  best_efforts: number[];
}
