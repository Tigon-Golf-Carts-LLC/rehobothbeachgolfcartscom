import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Leaf, Car, Calculator, TrendingUp, TreePine, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

interface EcoCalculatorProps {
  className?: string;
}

interface CalculationResult {
  co2Saved: number;
  fuelSaved: number;
  costSaved: number;
  treesEquivalent: number;
  electricCost: number;
  netSavings: number;
}

const EcoImpactCalculator: React.FC<EcoCalculatorProps> = ({ className = "" }) => {
  const [milesPerWeek, setMilesPerWeek] = useState<number>(25);
  const [usageType, setUsageType] = useState<string>("recreational");
  const [timeFrame, setTimeFrame] = useState<string>("1");
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  // Carbon emissions data (lbs CO2 per gallon of gas)
  const CO2_PER_GALLON = 19.6; // EPA standard
  const GAS_CART_MPG = 15; // Average gas golf cart efficiency
  const GAS_PRICE = 3.50; // Average gas price per gallon
  const ELECTRIC_RATE = 0.12; // Average electricity cost per kWh
  const ELECTRIC_CART_KWH_PER_MILE = 0.15; // Efficient electric golf cart
  const TREES_PER_TON_CO2 = 16.5; // Trees needed to offset 1 ton CO2/year

  const usageMultipliers = {
    recreational: 1.0,
    residential: 1.2,
    commercial: 2.0,
    golf_course: 2.5
  };

  const calculateImpact = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const timeMultiplier = parseInt(timeFrame);
      const usageMultiplier = usageMultipliers[usageType as keyof typeof usageMultipliers];
      const totalMiles = milesPerWeek * 52 * timeMultiplier * usageMultiplier;
      
      // Gas cart calculations
      const gallonsUsed = totalMiles / GAS_CART_MPG;
      const co2Produced = gallonsUsed * CO2_PER_GALLON;
      const fuelCost = gallonsUsed * GAS_PRICE;
      
      // Electric cart calculations
      const electricityUsed = totalMiles * ELECTRIC_CART_KWH_PER_MILE;
      const electricCost = electricityUsed * ELECTRIC_RATE;
      
      // Environmental impact
      const co2Saved = co2Produced; // All CO2 that would have been produced
      const fuelSaved = gallonsUsed;
      const costSaved = fuelCost;
      const treesEquivalent = (co2Saved / 2000) * TREES_PER_TON_CO2; // Convert to tons then trees
      const netSavings = fuelCost - electricCost;

      setResults({
        co2Saved,
        fuelSaved,
        costSaved,
        treesEquivalent,
        electricCost,
        netSavings
      });

      setIsCalculating(false);
      setShowAnimation(true);
    }, 1500);
  };

  useEffect(() => {
    if (showAnimation) {
      const timer = setTimeout(() => setShowAnimation(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAnimation]);

  const formatNumber = (num: number, decimals: number = 0) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(num);
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    }).format(num);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 shadow-xl">
        <CardHeader className="text-center pb-2">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Leaf className="w-8 h-8 text-green-600 mr-2" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
              Eco-Impact Calculator
            </CardTitle>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Calculate your environmental impact and savings by switching to electric golf carts
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Input Section */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="miles" className="text-sm font-medium text-gray-700">
                Miles per Week
              </Label>
              <Input
                id="miles"
                type="number"
                value={milesPerWeek}
                onChange={(e) => setMilesPerWeek(Number(e.target.value))}
                min="1"
                max="500"
                className="text-center font-medium"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="usage" className="text-sm font-medium text-gray-700">
                Usage Type
              </Label>
              <Select value={usageType} onValueChange={setUsageType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recreational">Recreational</SelectItem>
                  <SelectItem value="residential">Residential Community</SelectItem>
                  <SelectItem value="commercial">Commercial/Resort</SelectItem>
                  <SelectItem value="golf_course">Golf Course</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timeframe" className="text-sm font-medium text-gray-700">
                Time Frame
              </Label>
              <Select value={timeFrame} onValueChange={setTimeFrame}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Year</SelectItem>
                  <SelectItem value="3">3 Years</SelectItem>
                  <SelectItem value="5">5 Years</SelectItem>
                  <SelectItem value="10">10 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center">
            <Button
              onClick={calculateImpact}
              disabled={isCalculating}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium"
            >
              {isCalculating ? (
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Calculating...
                </motion.div>
              ) : (
                <div className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Impact
                </div>
              )}
            </Button>
          </div>

          {/* Results Section */}
          <AnimatePresence>
            {results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="text-center mb-6">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2 text-lg">
                    Environmental Impact Over {timeFrame} Year{timeFrame !== "1" ? "s" : ""}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* CO2 Savings */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Card className="bg-green-100 border-green-200">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Leaf className="w-6 h-6 text-green-600 mr-2" />
                          <span className="font-semibold text-green-800">CO₂ Prevented</span>
                        </div>
                        <div className="text-2xl font-bold text-green-700">
                          <AnimatedCounter 
                            end={results.co2Saved} 
                            decimals={1} 
                            suffix=" lbs" 
                            duration={2}
                          />
                        </div>
                        <div className="text-sm text-green-600">
                          = <AnimatedCounter 
                            end={results.co2Saved / 2000} 
                            decimals={2} 
                            suffix=" tons" 
                            duration={2.5}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Fuel Savings */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Card className="bg-blue-100 border-blue-200">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Car className="w-6 h-6 text-blue-600 mr-2" />
                          <span className="font-semibold text-blue-800">Fuel Saved</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-700">
                          <AnimatedCounter 
                            end={results.fuelSaved} 
                            decimals={1} 
                            suffix=" gallons" 
                            duration={2.2}
                          />
                        </div>
                        <div className="text-sm text-blue-600">
                          Gasoline consumption avoided
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Trees Equivalent */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Card className="bg-emerald-100 border-emerald-200">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <TreePine className="w-6 h-6 text-emerald-600 mr-2" />
                          <span className="font-semibold text-emerald-800">Trees Equivalent</span>
                        </div>
                        <div className="text-2xl font-bold text-emerald-700">
                          <AnimatedCounter 
                            end={results.treesEquivalent} 
                            decimals={1} 
                            suffix=" trees" 
                            duration={2.8}
                          />
                        </div>
                        <div className="text-sm text-emerald-600">
                          Carbon offset equivalent
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Cost Savings */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card className="bg-yellow-100 border-yellow-200">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                          <span className="font-semibold text-yellow-800">Net Savings</span>
                        </div>
                        <div className="text-2xl font-bold text-yellow-700">
                          <AnimatedCounter 
                            end={results.netSavings} 
                            decimals={0} 
                            prefix="$" 
                            duration={3}
                          />
                        </div>
                        <div className="text-sm text-yellow-600">
                          After electricity costs
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Detailed Breakdown */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gray-50 rounded-lg p-4 space-y-2"
                >
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Cost Breakdown
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gas Cart Fuel Cost:</span>
                      <span className="font-medium text-red-600">{formatCurrency(results.costSaved)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Electric Cart Electricity:</span>
                      <span className="font-medium text-green-600">{formatCurrency(results.electricCost)}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Animated Environmental Message */}
                <AnimatePresence>
                  {showAnimation && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, repeat: 2 }}
                        className="inline-block"
                      >
                        🌱
                      </motion.div>
                      <p className="font-bold text-lg mt-2">
                        Great Choice for the Environment!
                      </p>
                      <p className="text-sm opacity-90">
                        Your switch to electric saves the planet and your wallet
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
};

export default EcoImpactCalculator;