class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
  
    mean() {
      return this.data.reduce((sum, value) => sum + value, 0) / this.data.length;
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
  
      return sortedData.length % 2 === 0
        ? (sortedData[mid - 1] + sortedData[mid]) / 2
        : sortedData[mid];
    }
  
    mode() {
      const frequencyMap = new Map();
      let maxFrequency = 0;
      let modes = [];
  
      this.data.forEach((value) => {
        const frequency = (frequencyMap.get(value) || 0) + 1;
        frequencyMap.set(value, frequency);
  
        if (frequency > maxFrequency) {
          maxFrequency = frequency;
          modes = [value];
        } else if (frequency === maxFrequency) {
          modes.push(value);
        }
      });
  
      return modes;
    }
  
    // Measures of Dispersion
  
    range() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    variance() {
      const mean = this.mean();
      return this.data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    interquartileRange() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
  
      const lowerHalf = sortedData.slice(0, mid);
      const upperHalf = sortedData.slice(mid + (sortedData.length % 2 === 0 ? 0 : 1));
  
      return this.median(upperHalf) - this.median(lowerHalf);
    }
  
    coefficientOfVariation() {
      return (this.standardDeviation() / this.mean()) * 100;
    }
  }
  
  // Example usage
  const data = [1, 2, 2, 3, 4, 4, 4, 5];
  const stats = new DescriptiveStatistics(data);
  
  console.log('Mean:', stats.mean());
  console.log('Median:', stats.median());
  console.log('Mode:', stats.mode());
  
  console.log('Range:', stats.range());
  console.log('Variance:', stats.variance());
  console.log('Standard Deviation:', stats.standardDeviation());
  console.log('Interquartile Range:', stats.interquartileRange());
  console.log('Coefficient of Variation:', stats.coefficientOfVariation());
  